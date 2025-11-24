import React, { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function handleClickOutside(e) {
      const el = ref.current;
      if (!el || el.contains(e.target)) return;

      handler(e);
    }

    document.addEventListener('pointerdown', handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside, { capture: true });
    };
  }, [ref, handler]);
}
