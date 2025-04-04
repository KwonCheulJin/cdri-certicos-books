import NavLink from '@/components/common/NavLink';
import Typography from '@/components/common/Typography';
import { NAV_ITEMS } from '@/types/constant';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {
  const location = useLocation();
  return (
    <Header>
      <NavLink to={'/'} aria-label="홈으로 이동">
        <Typography
          variant="title1"
          style={{ minWidth: '207px', marginRight: '113px' }}
        >
          CERTICOS BOOKS
        </Typography>
      </NavLink>
      <Nav aria-label="메인 네비게이션">
        <NavList>
          {NAV_ITEMS.map(item => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                aria-label={item.ariaLabel}
                aria-current={
                  location.pathname === item.path ? 'page' : undefined
                }
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  padding: 24px 160px;
  margin: 0 auto;
  height: 32px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 960px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 56px;
  width: 100%;
  justify-content: center;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;
