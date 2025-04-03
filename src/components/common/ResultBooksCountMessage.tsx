import Typography from '@/components/common/Typography';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

interface Props {
  label: string;
  totalCount?: number;
}
export default function ResultBooksCountMessage({
  label,
  totalCount = 0,
}: Props) {
  return (
    <ResultContainer>
      <Typography variant="caption">{label}</Typography>
      <ResultCountContainer>
        <Typography variant="caption">총</Typography>
        <Typography
          variant="caption"
          style={{ color: `${theme.palette.primary}`, marginLeft: 6 }}
        >
          {totalCount}
        </Typography>
        <Typography variant="caption">건</Typography>
      </ResultCountContainer>
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  display: flex;
  margin: 25px 0 36px 0;
  gap: 16px;
`;

const ResultCountContainer = styled.div``;
