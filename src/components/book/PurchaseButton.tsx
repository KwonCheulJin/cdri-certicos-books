import Button from '@/components/common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  url: string;
  isOpen: boolean;
}
export default function PurchaseButton({ url, isOpen }: Props) {
  return (
    <Button variant="primary" size={isOpen ? 'large' : 'base'}>
      <CustomLink to={url} target="_blank" rel="noopener noreferrer">
        구매하기
      </CustomLink>
    </Button>
  );
}

const CustomLink = styled(Link)`
  all: unset;
`;
