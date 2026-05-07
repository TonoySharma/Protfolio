import ProjectsPage from '@/components/projectSection/Project';
import React from 'react';

export const metadata = {
  title: "My Projects | Tonoy Sharma",
  description:
    "A collection of modern, responsive, and real-world web applications showcasing my skills in full stack development, UI/UX design, and problem solving.",
};

const page = () => {
  return (
    <div>
      <ProjectsPage></ProjectsPage>
    </div>
  );
};

export default page;