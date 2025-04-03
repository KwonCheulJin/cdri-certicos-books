import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function PageContainer({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 80px 0 0 0;
`;
