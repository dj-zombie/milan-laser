'use client';

interface ErrorMessageProps {
  title?: string;
  message?: string;
  path?: string;
}

export default function ErrorMessage({ 
  title = 'Page Not Found',
  message = 'The requested page could not be found.',
  path
}: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600">{message}</p>
        {path && (
          <p className="text-gray-500 mt-2">Path: {path}</p>
        )}
      </div>
    </div>
  );
}
