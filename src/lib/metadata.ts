import { Metadata } from 'next';

export function generateMetadata(title?: string, description?: string): Metadata {
  const baseTitle = 'Milan Laser Hair Removal';
  const baseDescription = 'Experience the most advanced laser treatments with guaranteed results';

  return {
    title: title ? `${title} | ${baseTitle}` : baseTitle,
    description: description || baseDescription,
    openGraph: {
      title: title ? `${title} | ${baseTitle}` : baseTitle,
      description: description || baseDescription,
      siteName: baseTitle,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${baseTitle}` : baseTitle,
      description: description || baseDescription,
    },
  };
}
