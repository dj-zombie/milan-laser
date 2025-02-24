'use client';

import { BuilderComponent as BuilderReactComponent } from '@builder.io/react';

export default function BuilderComponent({ model, content }: { model: string; content: any }) {
  return (
    <BuilderReactComponent
      model={model}
      content={content}
    />
  );
}
