import { searchStorage } from '@/storage/search';
import { useCallback, useEffect, useState } from 'react';

export default function useStoredKeywords() {
  const [keywords, setKeywords] = useState<string[]>(() =>
    searchStorage.getKeywords()
  );

  const setStoredKeywords = useCallback(
    (keyword: string) => {
      const isDuplicate = keywords.some(item => item === keyword);
      if (isDuplicate) return;
      const updateKeywords = [keyword, ...keywords].slice(0, 8);

      searchStorage.updateKeywords(updateKeywords);
    },
    [keywords]
  );

  const removeStoredKeyword = useCallback(
    (keyword: string) => {
      const updateKeywords = keywords.filter(item => item !== keyword);

      searchStorage.updateKeywords(updateKeywords);
    },
    [keywords]
  );

  const subscribeToStorage = useCallback(() => {
    return searchStorage.subscribe(value => {
      setKeywords((value as string[]) || []);
    });
  }, []);

  useEffect(() => {
    return subscribeToStorage();
  }, [subscribeToStorage]);

  return { keywords, setStoredKeywords, removeStoredKeyword };
}
