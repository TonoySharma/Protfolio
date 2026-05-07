import SkillsPage from '@/components/skills/SkillsSection';
import React from 'react';

export const metadata = {
  title: "Skills | Tonoy Sharma - Full Stack Developer",
  description:
    "Explore my technical skills including React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and modern web development tools used to build scalable applications.",
};

const page = () => {
  return (
    <div>
      <SkillsPage></SkillsPage>
    </div>
  );
};

export default page;