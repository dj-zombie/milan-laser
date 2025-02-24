'use client';

import React from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { BuilderContent } from '@builder.io/sdk';

interface RenderContentProps {
  content: BuilderContent | null;
}

export function RenderContent({ content }: RenderContentProps) {
  const [mounted, setMounted] = React.useState(false);
  const isPreviewing = useIsPreviewing();

  React.useEffect(() => {
    require('@builder.io/react').builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
    setMounted(true);
  }, []);

  // Don't render anything on the server
  if (!mounted && !isPreviewing) {
    return null;
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <BuilderComponent
      model="page"
      content={content}
      options={{ includeRefs: true }}
    />
  );
}
