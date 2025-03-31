import { theme } from '@/styles/theme.ts';
import { typography } from '@/styles/typography';
import React, { JSX } from 'react';
import styled from 'styled-components';

type Variant = keyof typeof typography;
type Text = keyof typeof theme.text;

interface TypographyProps {
  $variant: Variant;
  $text?: Text;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Component = styled.div<
  TypographyProps & { as: keyof JSX.IntrinsicElements }
>`
  ${({ $variant }) => typography[$variant]}
  ${({ $text }) => $text && theme.text[$text]}
`;

const Typography: React.FC<TypographyProps> = ({
  $variant,
  $text = 'primary',
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
    small: 'small',
  };

  const tag = variantsMapping[$variant] as keyof JSX.IntrinsicElements;

  return (
    <Component as={tag} $variant={$variant} $text={$text} style={style}>
      {children}
    </Component>
  );
};

export default Typography;
