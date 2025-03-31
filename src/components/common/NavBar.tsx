import NavLink from '@/components/common/NavLink';
import Typography from '@/components/common/Typhography';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <Header>
      <NavLink to={'/'}>
        <Typography
          $variant="title1"
          style={{ minWidth: '207px', marginRight: '113px' }}
        >
          CERTICOS BOOKS
        </Typography>
      </NavLink>
      <Nav>
        <NavLink to={'/search'}>도서 검색</NavLink>
        <NavLink to={'/saved-books'}>내가 찜한 책</NavLink>
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
  gap: 56px;
  width: 100%;
  max-width: 960px;
  justify-content: center;
`;
