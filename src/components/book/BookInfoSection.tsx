import useStoredSavedBook from '@/components/book/hook/useStoredSavedBook';
import LikeWrapper from '@/components/book/LikeWrapper';
import Typography from '@/components/common/Typography';
import { typography } from '@/styles/typography';
import { CommonStyle } from '@/types/common';
import { IMAGE_SIZE } from '@/types/constant';
import { BookInfo } from '@/types/search';
import styled from 'styled-components';

interface Props {
  info: BookInfo;
  isOpen: boolean;
}
export default function BookInfoSection({ info, isOpen }: Props) {
  const { id, title, author, thumbnail, contents } = info;
  const { savedBookIds, toggleSavedBook } = useStoredSavedBook();

  const handleToggle = () => {
    toggleSavedBook(info);
  };
  return (
    <Container $isOpen={isOpen}>
      <LikeWrapper
        isOpen={isOpen}
        isLike={savedBookIds[id]}
        onToggleLike={handleToggle}
      >
        <img
          src={isOpen ? thumbnail.large : thumbnail.small}
          alt={title}
          loading="lazy"
          width={isOpen ? IMAGE_SIZE.open.width : IMAGE_SIZE.closed.width}
          height={isOpen ? IMAGE_SIZE.open.height : IMAGE_SIZE.closed.height}
        />
      </LikeWrapper>
      <BookSection $isOpen={isOpen}>
        <BookInfoContainer $isOpen={isOpen}>
          <Typography
            variant="title3"
            style={{
              maxWidth: isOpen ? 290 : 320,
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="secondary">
            {author}
          </Typography>
        </BookInfoContainer>
        {isOpen ? (
          <>
            <Typography
              variant="body2bold"
              color="secondary"
              style={{ margin: '16px 0 12px 0' }}
            >
              책 소개
            </Typography>
            <BookDescription>{contents}</BookDescription>
          </>
        ) : null}
      </BookSection>
    </Container>
  );
}

const Container = styled.div<CommonStyle>`
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'start' : 'center'}`};
  gap: ${({ $isOpen }) => `${$isOpen ? '32px' : '48px'}`};
`;

const BookSection = styled.div<CommonStyle>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ $isOpen }) => `${$isOpen ? '20px' : '0px'}`};
`;

const BookInfoContainer = styled.div<CommonStyle>`
  display: flex;
  align-items: ${({ $isOpen }) => `${$isOpen ? 'start' : 'center'}`};
  gap: 16px;
`;

const BookDescription = styled.div`
  width: 360px;
  margin-bottom: 12px;
  word-wrap: break-word;
  word-break: keep-all;
  overflow-wrap: break-word;
  white-space: normal;
  color: ${props => props.theme.text.primary};
  ${typography.small}
  line-height: 1.6; /* 폰트 크기의 1.6배 */
`;
