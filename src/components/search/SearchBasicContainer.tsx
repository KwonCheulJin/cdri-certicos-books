import useSearchBasic from '@/components/search/hook/useSearchBasic';
import useStoredKeywords from '@/components/search/hook/useStoredKeywords';
import SearchBasicInput from '@/components/search/SearchBasicInput';
import SearchHistory from '@/components/search/SearchHistory';
import { PORTAL_ID } from '@/types/constant';
import { useMemo } from 'react';
import styled from 'styled-components';

export default function BasicSearchContainer() {
  const { inputRef, handleSearch, isFocused, handleFocus, handleBlur } =
    useSearchBasic();
  const { keywords } = useStoredKeywords();
  const isVisible = useMemo(
    () => keywords.length > 0 && isFocused,
    [isFocused, keywords.length]
  );
  return (
    <>
      <Container>
        <SearchBasicInput
          ref={inputRef}
          type="text"
          onKeyDown={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isSearchHistory={isVisible}
          aria-label="도서 검색 입력"
          placeholder="검색어를 입력하세요"
        />
        <div id={PORTAL_ID.history} />
      </Container>
      {isVisible && <SearchHistory />}
    </>
  );
}

const Container = styled.div`
  position: relative;
`;
