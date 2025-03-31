import NavBar from '@/components/common/NavBar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 960px;
  max-width: 960px;
  height: calc(100vh - 80px);
  margin: 0 auto;
`;
