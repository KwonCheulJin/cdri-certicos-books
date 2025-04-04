import LikeEmptySvg from '@/assets/like-empty.svg?react';
import LikeFullSvg from '@/assets/like.svg?react';
import Button from '@/components/common/Button';
import { CommonStyle } from '@/types/common';
import { ReactNode } from 'react';
import styled from 'styled-components';
interface Props {
  isLike: boolean;
  onToggleLike: () => void;
  isOpen: boolean;
  children: ReactNode;
}
export default function LikeWrapper({
  isLike,
  onToggleLike,
  isOpen,
  children,
}: Props) {
  return (
    <ButtonContainer
      $isOpen={isOpen}
      variant="ghost"
      size="cover"
      onClick={onToggleLike}
    >
      <IconContainer>
        {isLike ? (
          <LikeFullIcon $isOpen={isOpen} />
        ) : (
          <LikeEmptyIcon $isOpen={isOpen} />
        )}
      </IconContainer>
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled(Button)<CommonStyle>`
  width: ${({ $isOpen }) => `${$isOpen ? '210px' : '48px'}`};
  height: ${({ $isOpen }) => `${$isOpen ? '280px' : '68px'}`};
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
`;

const LikeFullIcon = styled(LikeFullSvg)<CommonStyle>`
  width: ${({ $isOpen }) => `${$isOpen ? '24px' : '16px'}`};
  height: ${({ $isOpen }) => `${$isOpen ? '24px' : '16px'}`};
  position: absolute;
  top: 0;
  right: 0;
  padding: ${({ $isOpen }) => `${$isOpen ? '8px' : '2px'}`};
`;
const LikeEmptyIcon = styled(LikeEmptySvg)<CommonStyle>`
  width: ${({ $isOpen }) => `${$isOpen ? '24px' : '16px'}`};
  height: ${({ $isOpen }) => `${$isOpen ? '24px' : '16px'}`};
  position: absolute;
  top: 0;
  right: 0;
  padding: ${({ $isOpen }) => `${$isOpen ? '8px' : '2px'}`};
`;
