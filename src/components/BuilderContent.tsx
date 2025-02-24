'use client';

import { BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';

export default function BuilderContent({ content }: { content: any }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <BuilderComponent
      model="page"
      content={content}
    />
  );
}
