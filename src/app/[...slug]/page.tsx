'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { builder } from '../../lib/builder';
import { builder as reactBuilder } from '@builder.io/react';
import BuilderComponent from '../../components/BuilderComponent';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import '../../builder-registry';

// Initialize builder
reactBuilder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface Params {
  slug: string[];
}

export default function DynamicPage() {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams() as Params;

  useEffect(() => {
    async function fetchContent() {
      setIsLoading(true);
      try {
        const urlPath = `/${slug.join('/')}`;
        const builderContent = await builder.get('page', {
          userAttributes: {
            urlPath
          }
        }).promise();
        setContent(builderContent);
      } catch (error) {
        console.error('Error fetching Builder content:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchContent();
  }, [slug]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!content) {
    return (
      <ErrorMessage 
        path={`/${slug.join('/')}`}
        message="Make sure this page exists in Builder.io"
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}
