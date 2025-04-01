import Typography from '@/components/common/Typhography';
import BasicSearchContainer from '@/components/search/BasicSearchContainer';
import DetailSearchContainer from '@/components/search/DetailSearchContainer';
import styled from 'styled-components';

export default function SearchPage() {
  return (
    <Container>
      <Typography variant="title2" style={{ marginBottom: '16px' }}>
        도서 검색
      </Typography>
      <SearchContainer>
        <BasicSearchContainer />
        <DetailSearchContainer />
      </SearchContainer>
    </Container>
  );
}

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.palette.primary};
  padding: 80px 36px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
