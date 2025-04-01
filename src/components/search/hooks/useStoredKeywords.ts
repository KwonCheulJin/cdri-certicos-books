import { LOCAL_STORAGE_KEY } from '@/types/constant';
import { useCallback, useEffect, useState } from 'react';

// 커스텀 이벤트 이름 정의
const STORAGE_UPDATE_EVENT = 'localStorageUpdate';

const getStoredKeywords = (): string[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY.storedKeywords);
  return stored ? JSON.parse(stored) : [];
};

export default function useStoredKeywords() {
  const [keywords, setKeywords] = useState<string[]>(() => getStoredKeywords());

  const updateStoredKeywords = (keywords: string[]) => {
    setKeywords(keywords);
    localStorage.setItem(
      LOCAL_STORAGE_KEY.storedKeywords,
      JSON.stringify(keywords)
    );

    // 커스텀 이벤트 발생
    window.dispatchEvent(
      new CustomEvent(STORAGE_UPDATE_EVENT, {
        detail: { key: LOCAL_STORAGE_KEY.storedKeywords, value: keywords },
      })
    );
  };
  const setStoredKeywords = useCallback(
    (keyword: string) => {
      const isDuplicate = keywords.some(item => item === keyword);
      if (isDuplicate) return;
      const updateKeywords = [keyword, ...keywords].slice(0, 8);

      updateStoredKeywords(updateKeywords);
    },
    [keywords]
  );

  const removeStoredKeyword = useCallback(
    (keyword: string) => {
      const updateKeywords = keywords.filter(item => item !== keyword);

      updateStoredKeywords(updateKeywords);
    },
    [keywords]
  );

  useEffect(() => {
    // 외부 탭/윈도우의 변경사항을 처리하는 핸들러
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEY.storedKeywords) {
        const newKeywords = e.newValue ? JSON.parse(e.newValue) : [];
        setKeywords(newKeywords);
      }
    };

    // 같은 탭/윈도우의 변경사항을 처리하는 핸들러
    const handleCustomEvent = (e: CustomEvent) => {
      if (e.detail.key === LOCAL_STORAGE_KEY.storedKeywords) {
        setKeywords(e.detail.value);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(
      STORAGE_UPDATE_EVENT,
      handleCustomEvent as EventListener
    );

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(
        STORAGE_UPDATE_EVENT,
        handleCustomEvent as EventListener
      );
    };
  }, []);

  return { keywords, setStoredKeywords, removeStoredKeyword };
}
