import Typography, { Variant } from '@/components/common/Typography';
import styled from 'styled-components';

interface Props {
  label: string;
  variant: Variant;
  price: number;
}
export default function PriceGroup({ label, price, variant }: Props) {
  return (
    <TypographyGroup>
      <Typography variant="small" color="subTitle">
        {label}
      </Typography>
      <Typography variant={variant}>{price.toLocaleString()}원</Typography>
    </TypographyGroup>
  );
}

const TypographyGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
