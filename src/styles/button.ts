import { theme } from '@/styles/theme';
import { css } from 'styled-components';

const primary = css`
  color: ${theme.palette.white};
  background-color: ${theme.palette.primary};
`;

const outline = css`
  color: ${theme.text.subTitle};
  background-color: ${theme.palette.white};
  border: 1px solid ${theme.text.subTitle};
  &:hover {
    background-color: ${theme.palette.lightGray};
  }
`;

const ghost = css`
  background-color: transparent;
`;

const lightGray = css`
  color: ${theme.text.secondary};
  background-color: ${theme.palette.lightGray};
`;

export const buttonVariants = {
  primary,
  lightGray,
  outline,
  ghost,
};

const full = css`
  width: 100%;
`;

const base = css`
  padding: 16px 28px;
`;

const small = css`
  box-sizing: border-box;
  padding: 10px;
  height: 36px;
`;

const icon = css`
  padding: 4px;
`;

export const buttonSize = {
  full,
  base,
  small,
  icon,
};
