import React from "react";
import { HeroSection } from "./HeroSection";

const App: React.FC = () => {
  return (
    <>
      <HeroSection
        title={["Transform Your Business", "With Advanced Technology"]}
        description="Revolutionize your operations with cutting-edge solutions that drive growth and innovation. Join thousands of successful businesses who trust our platform."
        primaryButtonText="Get Started Now"
        secondaryButtonText="Watch Demo"
      />
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"> <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script> <script src="https://unpkg.com/@tailwindcss/browser@4"></script>',
          }}
        />
      </div>
    </>
  );
};

export default App;
