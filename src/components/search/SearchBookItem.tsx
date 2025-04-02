import BookActionsSection from '@/components/book/BookActionsSection';
import BookInfoSection from '@/components/book/BookInfoSection';
import { BookInfo } from '@/types/search-book';
import styled from 'styled-components';

interface Props {
  book: BookInfo;
  isOpen: boolean;
  onToggle: () => void;
}
export default function SearchBookItem({ book, isOpen, onToggle }: Props) {
  const { url, price } = book;
  // const descRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const currentDescRef = descRef.current;

  //   if (currentDescRef) {
  //     currentDescRef.addEventListener('beforematch', toggle);
  //   }
  //   return () => {
  //     if (currentDescRef) {
  //       currentDescRef.removeEventListener('beforematch', toggle);
  //     }
  //   };
  // }, [toggle]);
  return (
    <Container $isOpen={isOpen}>
      <BookInfoSection isOpen={isOpen} info={book} />
      <BookActionsSection
        isOpen={isOpen}
        onToggle={onToggle}
        url={url}
        price={price}
      />
    </Container>
  );
}

export type CommonProps = {
  $isOpen: boolean;
};
const Container = styled.li<CommonProps>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'start' : 'center'}`};
  justify-content: space-between;
  padding: ${({ $isOpen }) =>
    `${$isOpen ? '26px 16px 40px 54px' : '16px 16px 16px 48px'}`};
  border-bottom: 1px solid ${props => props.theme.palette.gray2};
`;
