'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#0088AB]">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
