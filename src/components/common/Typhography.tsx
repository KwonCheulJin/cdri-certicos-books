import { theme } from '@/styles/theme';
import { typography } from '@/styles/typography';
import React, { JSX } from 'react';
import styled from 'styled-components';

type Variant = keyof typeof typography;
type TextColor = keyof typeof theme.text;

interface Props {
  variant: Variant;
  color?: TextColor;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Typography: React.FC<Props> = ({
  variant,
  color = 'primary',
  children,
  style,
}) => {
  const variantsMapping: Record<Variant, string> = {
    title1: 'h1',
    title2: 'h2',
    title3: 'h3',
    body1: 'p',
    body2: 'p',
    body2bold: 'p',
    caption: 'span',
    captionMedium: 'span',
    small: 'small',
  };

  const tag = variantsMapping[variant] as keyof JSX.IntrinsicElements;

  return (
    <Component as={tag} $variant={variant} $color={color} style={style}>
      {children}
    </Component>
  );
};

export default Typography;

interface TypographyProps {
  $variant: Variant;
  $color: TextColor;
  as: keyof JSX.IntrinsicElements;
}
const Component = styled.div<TypographyProps>`
  color: ${({ $color }) => theme.text[$color]};
  ${({ $variant }) => typography[$variant]};
`;
