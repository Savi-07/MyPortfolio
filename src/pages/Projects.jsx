import React from 'react';
import ProjectSection from '../components/ProjectSection';
// import proj1Logo from '../assets/proj1.png';
// import proj1SS from '../assets/Proj1.jpg';
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpeg';
// import img5 from '../assets/img5.jpg';
// import img6 from '../assets/img6.jpg';

import enrt1 from '../assets/Enroute1.jpg';
import enrt2 from '../assets/Enroute2.jpg';
import enrt3 from '../assets/Enroute3.jpg';

import admin1 from '../assets/ParidhiAdmin1.jpg'
import admin2 from '../assets/ParidhiAdmin2.jpg'


import megaOrientation1 from '../assets/MegatronixOrientation1.jpg'
import megaOrientation2 from '../assets/MegatronixOrientation2.jpg'
import megaOrientation3 from '../assets/MegatronixOrientation3.jpg'
import megaOrientation4 from '../assets/MegatronixOrientation4.jpg'
import megaOrientation5 from '../assets/MegatronixOrientation5.jpg'


import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* <h1 className="projects-title">Projects</h1> */}
      <div className="projects-list">

        <ProjectSection
          // logo={proj1Logo}
          screenshots={[admin1, admin2]}
          title="Pardhi Admin App"
          description={`Paridhi Admin App was built to digitize and streamline the entire coordination process of Paridhi, our college’s annual tech fest with 1000+ participants.\n\nI led the development of the Flutter-based mobile app which enabled real-time management of events, participants, and volunteers—significantly reducing the manual effort and improving response time.`}
          demoLink="https://github.com/Savi-07"
        />


        <ProjectSection
          // logo={proj2Logo}
          screenshots={[enrt1, enrt2, enrt3]}
          title="Enroute Guardian"
          description='A smart accident detection and emergency alert system designed to improve road safety. The mobile app uses device sensors such as gyroscope & accelrometer to detect crashes and immediately notify emergency contacts with real-time location data(Geo Coordiantes).'
          demoLink="https://github.com/Savi-07/Enroute-Guardian"
        />
        
        <ProjectSection
          // logo={proj3Logo}
          screenshots={[megaOrientation1, megaOrientation2,megaOrientation3, megaOrientation4, megaOrientation5]}
          title="MegaTronix Orientation"
          description="A static mobile application developed for the official orientation of Megatronix, the technical club of MSIT. The app serves as a digital introduction to the club's legacy, ongoing initiatives, and event lineup.

Images and content are fetched in real-time using Supabase, ensuring smooth scalability without requiring a full backend. The app also includes quick-access contact links to all social media platforms for community engagement."
          demoLink="https://github.com/Savi-07/MegaTronix_Orientation"
        />
      </div>
    </section>
  );
};

export default Projects; 