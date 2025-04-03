import XmarkSmallSvg from '@/assets/xmark-small.svg?react';
import Button from '@/components/common/Button';
import Select from '@/components/search/Select';

import { typography } from '@/styles/typography';
import { PORTAL_ID, SearchCategoryItem } from '@/types/constant';
import { Dispatch, RefObject, SetStateAction, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface Props {
  inputRef: RefObject<HTMLInputElement | null>;
  items: SearchCategoryItem[];
  selectedItem: SearchCategoryItem;
  setSelectedItem: Dispatch<SetStateAction<SearchCategoryItem>>;
  handleSearch: () => void;
  handleModalClose: () => void;
}

export default function DetailSearchModal({
  inputRef,
  items,
  selectedItem,
  setSelectedItem,
  handleSearch,
  handleModalClose,
}: Props) {
  const portalElement = document.getElementById(PORTAL_ID.detailModal);

  const onSubmit = useCallback(() => {
    handleSearch();
    handleModalClose();
  }, [handleModalClose, handleSearch]);

  if (!portalElement) return null;
  return createPortal(
    <ModalContainer role="dialog">
      <ButtonContainer onClick={handleModalClose} variant="ghost" size="icon">
        <XmarkSmallSvg />
      </ButtonContainer>
      <SearchContainer>
        <Select
          items={items}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <DetailSearchInput
          ref={inputRef}
          type="text"
          placeholder="검색어 입력"
        />
      </SearchContainer>
      <Button
        variant="primary"
        size="full"
        font="captionMedium"
        onClick={onSubmit}
      >
        검색하기
      </Button>
    </ModalContainer>,
    portalElement
  );
}

const ModalContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 160px;
  padding: 36px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 14px 6px rgba(151, 151, 151, 0.15);
  background-color: ${props => props.theme.palette.white};
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
`;

const ButtonContainer = styled(Button)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const DetailSearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  background-color: transparent;
  border-bottom: 1px solid ${props => props.theme.palette.primary};
  padding: 8px 0px 8px 9.5px;
  border-top: none;
  border-left: none;
  border-right: none;
  ${typography['captionMedium']};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.text.subTitle};
  }
`;
