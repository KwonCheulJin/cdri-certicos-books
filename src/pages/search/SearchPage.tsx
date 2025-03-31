import Typography from '@/components/common/Typhography';
import BasicSearchContainer from '@/components/search/BasicSearchContainer';
import DetailSearchButton from '@/components/search/DetailSearchButton';
import styled from 'styled-components';

export default function SearchPage() {
  return (
    <Container>
      <Typography variant="title2" style={{ marginBottom: '16px' }}>
        도서 검색
      </Typography>
      <SearchContainer>
        <BasicSearchContainer />
        <DetailSearchButton />
      </SearchContainer>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.palette.primary};
  padding: 104px 36px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 16px;
`;
