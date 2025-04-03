import BookListSection from '@/components/book/BookListSection';
import PageContainer from '@/components/common/PageContainer';
import PageTitle from '@/components/common/PageTitle';
import BasicSearchContainer from '@/components/search/BasicSearchContainer';
import DetailSearchContainer from '@/components/search/DetailSearchContainer';

import useSearchInfiniteScroll from '@/components/search/hook/useSearchInfiniteScroll';
import styled from 'styled-components';

export default function SearchPage() {
  const { data, ref } = useSearchInfiniteScroll();

  return (
    <PageContainer>
      <SearchFormContainer>
        <PageTitle title="도서 검색" />
        <SearchContainer role="search" aria-label="도서 검색 폼">
          <BasicSearchContainer />
          <DetailSearchContainer />
        </SearchContainer>
      </SearchFormContainer>
      <BookListSection
        label="도서 검색 결과"
        data={data}
        ref={ref}
        emptyMessage="검색된 결과가 없습니다."
        fallbackMessage="도서 검색 중 문제가 발생했습니다."
      />
    </PageContainer>
  );
}

const SearchFormContainer = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
