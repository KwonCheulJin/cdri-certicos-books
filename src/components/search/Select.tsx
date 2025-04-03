import ArrowDownSvg from '@/assets/arrow-down.svg?react';
import { typography } from '@/styles/typography';
import { SearchCategoryItem } from '@/types/constant';
import { useSelect } from 'downshift';
import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

function itemToString(item: SearchCategoryItem | null) {
  return item ? item.value : '';
}

interface Props {
  items: SearchCategoryItem[];
  selectedItem: SearchCategoryItem;
  setSelectedItem: Dispatch<SetStateAction<SearchCategoryItem>>;
}
export default function Select({
  items,
  selectedItem,
  setSelectedItem,
}: Props) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    itemToString,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) =>
      newSelectedItem && setSelectedItem(newSelectedItem),
  });

  return (
    <SelectBox>
      <SelectTrigger
        {...getToggleButtonProps()}
        aria-labelledby="select-label"
        aria-expanded={isOpen}
      >
        <span id="select-label">
          {selectedItem ? selectedItem.value : items[0].value}
        </span>
        <ArrowDownIcon $isOpen={isOpen} />
      </SelectTrigger>
      <SelectList $isOpen={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <SelectItem
              key={item.id}
              {...getItemProps({ item, index })}
              $isHighlight={highlightedIndex === index}
              $isSelected={selectedItem === item}
            >
              <span>{item.value}</span>
            </SelectItem>
          ))}
      </SelectList>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  position: relative;
`;

const SelectTrigger = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
  width: 100px;
  height: 36px;
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.palette.gray2};
  span {
    ${typography['captionMedium']}
  }
`;

type CommonProps = {
  $isOpen: boolean;
};
const ArrowDownIcon = styled(ArrowDownSvg)<CommonProps>`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  padding: 8px 5.5px 6px 4px;
  ${({ $isOpen }) => css`
    transform: ${$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  `}
  transition: transform 0.3s ease-in-out;
`;

const SelectList = styled.ul<CommonProps>`
  position: absolute;
  display: ${({ $isOpen }) => `${$isOpen ? 'flex' : 'none'}`};
  flex-direction: column;
  width: 100px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.palette.white};
  margin-top: 6px;
  z-index: 10;
`;

type ItemProps = {
  $isSelected: boolean;
  $isHighlight: boolean;
};
const SelectItem = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  padding: 4px 0px 4px 8px;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: ${({ theme, $isHighlight, $isSelected }) =>
    `${
      $isHighlight
        ? `${theme.palette.primary}`
        : $isSelected
        ? `${theme.palette.primary}`
        : 'transparent'
    }`};
  color: ${({ theme, $isHighlight, $isSelected }) =>
    `${
      $isHighlight
        ? `${theme.palette.white}`
        : $isSelected
        ? `${theme.palette.white}`
        : `${theme.text.subTitle}`
    }`};
  ${typography['captionMedium']}
`;
