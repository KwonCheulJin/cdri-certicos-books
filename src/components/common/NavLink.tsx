import { typography } from '@/styles/typography';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function NavLink({ to, children, ...props }: LinkProps) {
  const { pathname } = useLocation();
  return (
    <CustomLink to={to} $isCurrent={to === pathname} {...props}>
      {children}
    </CustomLink>
  );
}

type CustomLinkProps = {
  $isCurrent: boolean;
};
const CustomLink = styled(Link)<CustomLinkProps>`
  position: relative;
  color: inherit;
  text-decoration: none;
  min-height: 24px;

  ${typography['body1']}
  ${props => props.theme.text.primary};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: ${props => props.theme.palette.primary};
    transition: width 0.3s ease-in-out;
    ${({ $isCurrent }) => `${$isCurrent ? 'width: 100%' : 'width: 0px'}`}
  }
`;
