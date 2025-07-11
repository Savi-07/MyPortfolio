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
          title="Enroute Guardian"
          description='A smart accident detection and emergency alert system designed to improve road safety. The mobile app uses device sensors such as gyroscope & accelrometer to detect crashes and immediately notify emergency contacts with real-time location data(Geo Coordiantes).'
          demoLink="https://github.com/dummy/project1"
        />
        <ProjectSection
          // logo={proj2Logo}
          screenshot={proj2SS}
          title="Pardhi Admin App"
          description='Paridhi Admin App was built to digitize and streamline the entire coordination process of Paridhi, our college’s annual tech fest with 1000+ participants.

I led the development of the Flutter-based mobile app which enabled real-time management of events, participants, and volunteers—significantly reducing the manual effort and improving response time.'
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