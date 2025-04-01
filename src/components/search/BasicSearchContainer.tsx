import BasicSearchInput from '@/components/search/BasicSearchInput';
import useBasicSearch from '@/components/search/hooks/useBasicSearch';
import useStoredKeywords from '@/components/search/hooks/useStoredKeywords';
import SearchHistory from '@/components/search/SearchHistory';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function BasicSearchContainer() {
  const { inputRef, handleSearch, isFocused, handleFocus, handleBlur } =
    useBasicSearch();
  const { keywords } = useStoredKeywords();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(keywords.length > 0 && isFocused);
  }, [isFocused, keywords.length]);
  return (
    <>
      <Container>
        <BasicSearchInput
          ref={inputRef}
          type="text"
          onKeyDown={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isSearchHistory={isVisible}
        />
        <div id="history-portal" />
      </Container>
      {isVisible && <SearchHistory />}
    </>
  );
}

const Container = styled.div`
  position: relative;
`;
