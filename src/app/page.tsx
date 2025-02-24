'use client';

import { LandingPage } from '../components/LandingPage';

export default function Home() {
  return (
    <LandingPage
      mainHeading="Never Shave Again. Guaranteed."
      subHeading="Experience permanent hair reduction with America's #1 laser hair removal experts"
      specialOffer="Limited Time Offer"
      specialOfferDetails="Get Your First Treatment Free with Consultation"
      showTestimonials={true}
      showPricing={true}
      showLocations={true}
    />
  );
}
