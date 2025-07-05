import React from 'react';
import ProjectSection from '../components/ProjectSection';
// import proj1Logo from '../assets/proj1.png';
import proj1SS from '../assets/Proj1.jpg';
// import proj2Logo from '../assets/proj2.png';
import proj2SS from '../assets/Proj1.jpg';
// import proj3Logo from '../assets/img1.jpg';
import proj3SS from '../assets/Proj1.jpg';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* <h1 className="projects-title">Projects</h1> */}
      <div className="projects-list">
        <ProjectSection
          // logo={proj1Logo}
          screenshot={proj1SS}
          title="Enroute Guardians"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl eu nuncLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl eu nuncLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl eu nunc."
          demoLink="https://github.com/dummy/project1"
        />
        <ProjectSection
          // logo={proj2Logo}
          screenshot={proj2SS}
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl eu nunc."
          demoLink="https://github.com/dummy/project2"
        />
        <ProjectSection
          // logo={proj3Logo}
          screenshot={proj3SS}
          title="Project 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl eu nunc."
          demoLink="https://github.com/dummy/project3"
        />
      </div>
    </section>
  );
};

export default Projects; 