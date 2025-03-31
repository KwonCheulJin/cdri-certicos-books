import { css } from 'styled-components';

const title1 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0%;
`;

const title2 = css`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0%;
`;

const title3 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0%;
`;

const body1 = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0%;
`;

const body2 = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0%;
`;

const body2bold = css`
  ${body2}
  font-weight: 700;
`;

const caption = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
`;

const small = css`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0%;
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
