import useStoredKeywords from '@/components/search/hooks/useStoredKeywords';
import { useSearchStore } from '@/store/useSearchStore';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

export default function useBasicSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const { setStoredKeywords } = useStoredKeywords();
  const { searchType, setSearchType, setSearchQuery } = useSearchStore(
    state => state
  );

  const handleSearch = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputRef.current) {
        const keyword = inputRef.current.value.trim().replace(/\s+/g, ' ');
        if (keyword === '') {
          inputRef.current.value = '';
          return;
        }
        setStoredKeywords(keyword);
        setSearchQuery({ query: keyword });
        inputRef.current.value = keyword;
      }
    },
    [setStoredKeywords, setSearchQuery]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setSearchType('BASIC');
  }, [setSearchType]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    if (searchType === 'DETAIL' && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [searchType]);

  return { inputRef, handleSearch, isFocused, handleFocus, handleBlur };
}
