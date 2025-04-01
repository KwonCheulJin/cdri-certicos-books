import SearchSvg from '@/assets/search.svg?react';
import { typography } from '@/styles/typography';
import { ComponentProps } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'input'> {
  isSearchHistory: boolean;
}
export default function BasicSearchInput({ isSearchHistory, ...props }: Props) {
  return (
    <Container $isSearchHistory={isSearchHistory}>
      <SearchIcon />
      <Input {...props} placeholder="검색어를 입력하세요" />
    </Container>
  );
}

type ContainerProps = {
  $isSearchHistory: boolean;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  border-radius: ${({ $isSearchHistory }) =>
    `${$isSearchHistory ? '24px 24px 0px 0px' : '25px'}`};
  width: 480px;
  height: 50px;
  background-color: ${props => props.theme.palette.lightGray};
  gap: 5px;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${props => props.theme.palette.lightGray};
  border: none;
  ${typography['caption']};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.text.subTitle};
    ${typography['caption']};
  }
`;

const SearchIcon = styled(SearchSvg)`
  width: 30px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
`;
