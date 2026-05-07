import AboutSectionPage from '@/components/aboutSection/About';
import React from 'react';

export const metadata = {
  title: "About - Tonoy Sharma",
  description:
    "Passionate Full Stack Developer dedicated to creating modern web experiences.",
};

const page = () => {
  return (
    <div>
      <AboutSectionPage></AboutSectionPage>
    </div>
  );
};

export default page;