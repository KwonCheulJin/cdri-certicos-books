import BookSvg from '@/assets/book.svg?react';
import Typography from '@/components/common/Typography';
import styled from 'styled-components';
export default function EmptySearchBook() {
  return (
    <Container>
      <BookIcon />
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

const BookIcon = styled(BookSvg)`
  width: 80px;
  height: 80px;
`;
