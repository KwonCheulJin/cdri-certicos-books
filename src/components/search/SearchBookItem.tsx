import ArrowDownSvg from '@/assets/arrow-down-large.svg?react';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typhography';
import { typography } from '@/styles/typography';
import { useState } from 'react';
import styled from 'styled-components';

const data = `“나를 언제까지나 잊지 마, 내가 여기 있었다는 걸 기억해 줘.”

하루키 월드의 빛나는 다이아몬드
무라카미 하루키를 만나기 위해 가장 먼저 읽어야 할 책!

페이지를 처음 펼치는 오늘의 젊음들에게, 그리고 오랜 기억 속에 책의 한 구절을 간직하고 있는 어제의 젊음들에게, 한결같은 울림으로 예민하고 섬세한 청춘의 감성을 전하며 영원한 필독서로 사랑받고 있는 무라카미 하루키의 대표작 『노르웨이의 숲』. 1989년 『상실의 시대』라는 제명으로 처음 출간된 이래 우리 출판 사상 최장기 베스트셀러를 기록하며 하나의 사건으로 남은 소설, 『노르웨이의 숲』이 민음사 세계문학전집에 이어 단행본으로 출간되었다.`;
// interface Props {
//   toggle: () => void;
// }
export default function SearchBookItem() {
  const [isOpen, setIsOpen] = useState(false);
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
      <BookInfoWrapper $isOpen={isOpen}>
        <Image
          $isOpen={isOpen}
          src={isOpen ? '/image-large.png' : '/image-small.png'}
        />
        <BookSection $isOpen={isOpen}>
          <BookInfoSection $isOpen={isOpen}>
            <Typography variant="title3">노르웨이 숲</Typography>
            <Typography variant="body2" color="secondary">
              무라카미 하루키
            </Typography>
          </BookInfoSection>
          {isOpen && (
            <>
              <Typography
                variant="body2bold"
                color="secondary"
                style={{ margin: '16px 0 12px 0' }}
              >
                책 소개
              </Typography>
              <BookDescription>
                “나를 언제까지나 잊지 마, 내가 여기 있었다는 걸 기억해 줘.”
                하루키 월드의 빛나는 다이아몬드 무라카미 하루키를 만나기 위해
                가장 먼저 읽어야 할 책! 페이지를 처음 펼치는 오늘의 젊음들에게,
                그리고 오랜 기억 속에 책의 한 구절을 간직하고 있는 어제의
                젊음들에게, 한결같은 울림으로 예민하고 섬세한 청춘의 감성을
                전하며 영원한 필독서로 사랑받고 있는 무라카미 하루키의 대표작
                『노르웨이의 숲』. 1989년 『상실의 시대』라는 제명으로 처음
                출간된 이래 우리 출판 사상 최장기 베스트셀러를 기록하며 하나의
                사건으로 남은 소설, 『노르웨이의 숲』이 민음사 세계문학전집에
                이어 단행본으로 출간되었다.
              </BookDescription>
            </>
          )}
        </BookSection>
      </BookInfoWrapper>
      <BookActions $isOpen={isOpen}>
        {!isOpen && (
          <PurchaseSection>
            <Typography variant="title3">13,300원</Typography>
            <Button variant="primary" size="base">
              구매하기
            </Button>
          </PurchaseSection>
        )}
        <AccordionButton
          variant="lightGray"
          size="accordion"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span>상세보기</span>
          <ArrowDownIcon $isOpen={isOpen} />
        </AccordionButton>
        {isOpen && (
          <PurchaseSection $isOpen={isOpen}>
            <TypographyContainer>
              <TypographyGroup>
                <Typography variant="small" color="subTitle">
                  원가
                </Typography>
                <Typography
                  variant="thin"
                  style={{ textDecoration: 'line-through' }}
                >
                  13,300원
                </Typography>
              </TypographyGroup>
              <TypographyGroup>
                <Typography variant="small" color="subTitle">
                  할인가
                </Typography>
                <Typography variant="title3">13,300원</Typography>
              </TypographyGroup>
            </TypographyContainer>
            <Button variant="primary" size="large">
              구매하기
            </Button>
          </PurchaseSection>
        )}
      </BookActions>
    </Container>
  );
}

type CommonProps = {
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

const Image = styled.img<CommonProps>`
  width: ${({ $isOpen }) => `${$isOpen ? '210px' : '48px'}`};
  height: ${({ $isOpen }) => `${$isOpen ? '280px' : '68px'}`};
`;

const BookInfoWrapper = styled.div<CommonProps>`
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'start' : 'center'}`};
  gap: ${({ $isOpen }) => `${$isOpen ? '32px' : '48px'}`};
`;

const BookSection = styled.div<CommonProps>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ $isOpen }) => `${$isOpen ? '20px' : '0px'}`};
`;

const BookInfoSection = styled.div<CommonProps>`
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'start' : 'center'}`};
  gap: 16px;
`;

const BookActions = styled.div<CommonProps>`
  display: flex;
  height: ${({ $isOpen }) => `${$isOpen ? '278px' : 'auto'}`};
  align-items: ${({ $isOpen }) => `${$isOpen ? 'end' : 'center'}`};
  justify-content: ${({ $isOpen }) => `${$isOpen ? 'space-between' : 'start'}`};
  flex-direction: ${({ $isOpen }) => `${$isOpen ? 'column' : 'row'}`};
  gap: 8px;
`;

const PurchaseSection = styled.div<Partial<CommonProps>>`
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'end' : 'center'}`};
  flex-direction: ${({ $isOpen }) => `${$isOpen ? 'column' : 'row'}`};
  gap: ${({ $isOpen }) => `${$isOpen ? '28px' : '56px'}`};
`;

const AccordionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ArrowDownIcon = styled(ArrowDownSvg)<CommonProps>`
  padding-top: ${({ $isOpen }) => `${$isOpen ? '0px' : '4px'}`};
  transform: ${({ $isOpen }) =>
    `${$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`};
  transition: transform 0.3s ease-in-out;
`;

const BookDescription = styled.div`
  width: 360px;
  margin-bottom: 12px; /* 문단 간 간격 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  overflow-wrap: break-word; /* 현대 브라우저용 */
  white-space: normal;
  color: ${props => props.theme.text.primary};
  ${typography.small}
  line-height: 1.6; /* 폰트 크기의 1.6배 */
`;

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
`;

const TypographyGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
