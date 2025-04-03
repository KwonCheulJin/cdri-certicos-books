import ArrowDownSvg from '@/assets/arrow-down-large.svg?react';
import PriceGroup from '@/components/book/PriceGroup';
import PurchaseButton from '@/components/book/PurchaseButton';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import { CommonStyle } from '@/types/common';
import { BookInfo } from '@/types/search';
import styled from 'styled-components';

interface Props {
  book: Pick<BookInfo, 'url' | 'price'>;
  isOpen: boolean;
  onToggle: () => void;
}
export default function BookActionsSection({ book, isOpen, onToggle }: Props) {
  const { url, price } = book;
  return (
    <BookActions $isOpen={isOpen}>
      {!isOpen ? (
        <PurchaseSection>
          <Typography variant="title3">
            {price.discounted
              ? price.discounted.toLocaleString()
              : price.original.toLocaleString()}
            원
          </Typography>
          <PurchaseButton url={url} isOpen={isOpen} />
        </PurchaseSection>
      ) : null}
      <AccordionButton
        variant="lightGray"
        size="accordion"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label="상세보기"
      >
        <span>상세보기</span>
        <ArrowDownIcon $isOpen={isOpen} />
      </AccordionButton>
      {isOpen ? (
        <PurchaseSection $isOpen={isOpen}>
          <TypographyContainer>
            <PriceGroup
              label="원가"
              variant={price.discounted ? 'thinStrike' : 'title3'}
              price={price.original}
            />
            {price.discounted && (
              <PriceGroup
                label="할인가"
                variant="title3"
                price={price.discounted}
              />
            )}
          </TypographyContainer>
          <PurchaseButton url={url} isOpen={isOpen} />
        </PurchaseSection>
      ) : null}
    </BookActions>
  );
}

const BookActions = styled.div<CommonStyle>`
  display: flex;
  height: ${({ $isOpen }) => `${$isOpen ? '278px' : 'auto'}`};
  align-items: ${({ $isOpen }) => `${$isOpen ? 'end' : 'center'}`};
  justify-content: ${({ $isOpen }) => `${$isOpen ? 'space-between' : 'start'}`};
  flex-direction: ${({ $isOpen }) => `${$isOpen ? 'column' : 'row'}`};
  gap: 8px;
`;

const PurchaseSection = styled.div<Partial<CommonStyle>>`
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'end' : 'center'}`};
  flex-direction: ${({ $isOpen }) => `${$isOpen ? 'column' : 'row'}`};
  gap: ${({ $isOpen }) => `${$isOpen ? '28px' : '32px'}`};
`;

const AccordionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ArrowDownIcon = styled(ArrowDownSvg)<CommonStyle>`
  padding-top: ${({ $isOpen }) => `${$isOpen ? '0px' : '4px'}`};
  transform: ${({ $isOpen }) =>
    `${$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`};
  transition: transform 0.3s ease-in-out;
`;

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
`;
