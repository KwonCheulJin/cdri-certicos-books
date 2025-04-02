import { LOCAL_STORAGE_KEY } from '@/types/constant';
import { storageManager } from '@/utils/localStorageManager';
import { useCallback, useEffect, useState } from 'react';

const getStoredKeywords = (): string[] => {
  return storageManager.getItem(LOCAL_STORAGE_KEY.storedKeywords) || [];
};

const updateStoredKeywords = (keywords: string[]) => {
  storageManager.setItem(LOCAL_STORAGE_KEY.storedKeywords, keywords);
};

export default function useStoredKeywords() {
  const [keywords, setKeywords] = useState<string[]>(() => getStoredKeywords());

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
    return storageManager.subscribe(LOCAL_STORAGE_KEY.storedKeywords, value => {
      setKeywords((value as string[]) || []);
    });
  }, []);

  return { keywords, setStoredKeywords, removeStoredKeyword };
}
