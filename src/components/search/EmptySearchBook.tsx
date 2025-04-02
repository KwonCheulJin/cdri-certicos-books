import Typography from '@/components/common/Typography';
import styled from 'styled-components';
export default function EmptySearchBook() {
  return (
    <Container>
      <BookIcon src="/book.webp" alt="book-icon" />
      <Typography variant="caption" color="secondary">
        검색된 결과가 없습니다.
      </Typography>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
`;

const BookIcon = styled.img`
  width: 80px;
  height: 80px;
`;
