import styled from 'styled-components';

export default function SearchPage() {
  return <Container></Container>;
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.palette.primary};
`;
