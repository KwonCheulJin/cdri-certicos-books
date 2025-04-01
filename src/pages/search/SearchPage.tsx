import Typography from '@/components/common/Typhography';
import BasicSearchContainer from '@/components/search/BasicSearchContainer';
import DetailSearchContainer from '@/components/search/DetailSearchContainer';
import SearchBookItem from '@/components/search/SearchBookItem';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import styled from 'styled-components';

export default function SearchPage() {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id));
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
          {/* 책 검색하기 api의 meta(total_count)로 결과 개수 보여주기 */}
          <Typography
            variant="caption"
            style={{ color: `${theme.palette.primary}`, marginLeft: 6 }}
          >
            21
          </Typography>
          <Typography variant="caption">건</Typography>
        </ResultCountContainer>
      </SearchResultContainer>
      <ul>
        <SearchBookItem />
      </ul>
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
