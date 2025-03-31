import { css } from 'styled-components';

const title1 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

const title2 = css`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
`;

const title3 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
`;

const body1 = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
`;

const body2 = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
`;

const body2bold = css`
  ${body2}
  font-weight: 700;
`;

const caption = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

const small = css`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
`;

export const typography = {
  title1,
  title2,
  title3,
  body1,
  body2,
  body2bold,
  caption,
  small,
};
