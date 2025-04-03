import BookActionsSection from '@/components/book/BookActionsSection';
import BookInfoSection from '@/components/book/BookInfoSection';
import { CommonStyle } from '@/types/common';
import { BookInfo } from '@/types/search-book';
import styled from 'styled-components';

interface Props {
  book: BookInfo;
  isOpen: boolean;
  onToggle: () => void;
}
export default function SearchBookItem({ book, isOpen, onToggle }: Props) {
  return (
    <Container $isOpen={isOpen}>
      <BookInfoSection isOpen={isOpen} info={book} />
      <BookActionsSection isOpen={isOpen} onToggle={onToggle} book={book} />
    </Container>
  );
}

const Container = styled.li<CommonStyle>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'start' : 'center'}`};
  justify-content: space-between;
  padding: ${({ $isOpen }) =>
    `${$isOpen ? '26px 16px 40px 54px' : '16px 16px 16px 48px'}`};
  border-bottom: 1px solid ${props => props.theme.palette.gray2};
`;
