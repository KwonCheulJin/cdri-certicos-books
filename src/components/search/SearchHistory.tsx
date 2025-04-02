import XmarkSvg from '@/assets/xmark.svg?react';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import useBasicSearch from '@/components/search/hook/useBasicSearch';
import useStoredKeywords from '@/components/search/hook/useStoredKeywords';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export default function SearchHistory() {
  const { handleFocus } = useBasicSearch();
  const { keywords, removeStoredKeyword } = useStoredKeywords();

  const portalElement = document.getElementById('history-portal');

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 동작 방지하여 포커스 유지
  };

  if (!portalElement) return null;
  return createPortal(
    <Container onMouseEnter={handleFocus} onMouseDown={handleMouseDown}>
      {keywords.map(keyword => (
        <KeywordItem key={keyword}>
          <Typography variant="caption">{keyword}</Typography>
          <Button
            onClick={() => {
              removeStoredKeyword(keyword);
            }}
            variant="ghost"
            size="icon"
          >
            <XmarkSvg />
          </Button>
        </KeywordItem>
      ))}
    </Container>,
    portalElement
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 24px;
  border-radius: 0px 0px 24px 24px;
  width: 480px;
  background-color: ${props => props.theme.palette.lightGray};
  padding: 20px 25px 28px 46px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  list-style: none;
  z-index: 10;
`;

const KeywordItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.text.subTitle};
`;
