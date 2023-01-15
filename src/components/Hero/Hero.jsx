import React from "react";

import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      className="steap-border-bottom py-6 hero-adjust"
      style={{
        backgroundColor: "#038AFF",
      }}
    >
      <HeroContent />
    </section>
  );
};

export default Hero;
