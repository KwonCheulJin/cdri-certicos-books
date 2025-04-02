import Typography from '@/components/common/Typhography';
import BasicSearchContainer from '@/components/search/BasicSearchContainer';
import DetailSearchContainer from '@/components/search/DetailSearchContainer';
import useSearchInfiniteScroll from '@/components/search/hooks/useSearchInfiniteScroll';
import SearchBookItem from '@/components/search/SearchBookItem';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import styled from 'styled-components';

export default function SearchPage() {
  const { data, moreRef } = useSearchInfiniteScroll();
  const [openBookId, setOpenBookId] = useState<string | null>(null);
  const handleToggle = (id: string) => () => {
    setOpenBookId(prev => (prev === id ? null : id));
  };
  return (
    <Container>
      <SearchFormContainer>
        <Typography variant="title2" style={{ marginBottom: 16, height: 36 }}>
          도서 검색
        </Typography>
        <SearchContainer role="search" aria-label="도서 검색 폼">
          <BasicSearchContainer />
          <DetailSearchContainer />
        </SearchContainer>
      </SearchFormContainer>
      <SearchResultContainer>
        <Typography variant="caption">도서 검색 결과</Typography>
        <ResultCountContainer>
          <Typography variant="caption">총</Typography>
          <Typography
            variant="caption"
            style={{ color: `${theme.palette.primary}`, marginLeft: 6 }}
          >
            {data?.pages[0].totalCount ?? 0}
          </Typography>
          <Typography variant="caption">건</Typography>
        </ResultCountContainer>
      </SearchResultContainer>
      <ul>
        {data?.pages.map(page =>
          page.content.map(book => (
            <SearchBookItem
              key={book.id}
              book={book}
              isOpen={openBookId === book.id}
              onToggle={handleToggle(book.id)}
            />
          ))
        )}
      </ul>
      <div ref={moreRef} />
    </Container>
  );
}

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 80px 0 0 0;
`;

const SearchFormContainer = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchResultContainer = styled.div`
  display: flex;
  margin: 25px 0 36px 0;
  gap: 16px;
`;

const ResultCountContainer = styled.div``;
