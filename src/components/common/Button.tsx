import { buttonSize, buttonVariants } from '@/styles/button';
import { typography } from '@/styles/typography';
import { ComponentProps } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'button'> {
  variant: keyof typeof buttonVariants;
  size: keyof typeof buttonSize;
  font?: keyof typeof typography;
}
export default function Button({
  variant,
  size,
  font = 'caption',
  children,
  ...props
}: Props) {
  return (
    <Component $variant={variant} $size={size} $font={font} {...props}>
      {children}
    </Component>
  );
}

interface ButtonProps {
  $variant: keyof typeof buttonVariants;
  $size: keyof typeof buttonSize;
  $font: keyof typeof typography;
}
const Component = styled.button<ButtonProps>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 8px;
  padding: 13px 20px;
  ${typography['caption']}
  ${({ $variant }) => buttonVariants[$variant]}
  ${({ $size }) => buttonSize[$size]}
  ${({ $font }) => typography[$font]}
`;
