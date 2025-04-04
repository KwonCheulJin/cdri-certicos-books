import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  ref: (node?: Element | null) => void;
}
export default function InfiniteScrollSection({ ref, children }: Props) {
  return (
    <ul>
      {children}
      <div ref={ref} />
    </ul>
  );
}
