import Button from '@/components/common/Button';
import { PORTAL_ID } from '@/types/constant';
import styled from 'styled-components';

interface Props {
  handleModalOpen: () => void;
}
export default function DetailSearchButton({ handleModalOpen }: Props) {
  return (
    <Container>
      <Button
        variant="outline"
        size="small"
        font="body2"
        onClick={handleModalOpen}
      >
        상세검색
      </Button>
      <div id={PORTAL_ID.detailModal} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
