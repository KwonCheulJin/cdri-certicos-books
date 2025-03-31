import Button from '@/components/common/Button';
import styled from 'styled-components';

export default function DetailSearchButton() {
  return (
    <Container>
      <Button variant="outline" size="small" font="body2">
        상세검색
      </Button>
      <div id="detail-modal-portal" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: 8px;
`;
