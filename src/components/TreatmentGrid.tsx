'use client';

import { TreatmentCard } from './TreatmentCard';

interface Treatment {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
}

interface TreatmentGridProps {
  treatments: Treatment[];
}

export function TreatmentGrid({ treatments }: TreatmentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {treatments.map((treatment, index) => (
        <TreatmentCard key={index} {...treatment} />
      ))}
    </div>
  );
}
