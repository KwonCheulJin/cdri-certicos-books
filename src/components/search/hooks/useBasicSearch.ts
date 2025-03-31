import useStoredKeywords from '@/components/search/hooks/useStoredKeywords';
import { KeyboardEvent, useCallback, useRef, useState } from 'react';

export default function useBasicSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const { setStoredKeywords } = useStoredKeywords();

  const handleSearch = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputRef.current) {
        const keyword = inputRef.current.value.trim().replace(/\s+/g, ' ');
        if (keyword === '') {
          inputRef.current.value = '';
          return;
        }
        setStoredKeywords(keyword);
        inputRef.current.value = keyword;
      }
    },
    [setStoredKeywords]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return { inputRef, handleSearch, isFocused, handleFocus, handleBlur };
}
