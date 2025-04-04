import { useCallback, useState } from 'react';

export default function useAccordion() {
  const [openBookId, setOpenBookId] = useState<string | null>(null);
  const handleToggle = useCallback(
    (id: string) => () => {
      setOpenBookId(prev => (prev === id ? null : id));
    },
    []
  );
  return { openBookId, handleToggle };
}
