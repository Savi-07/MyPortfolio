import React from 'react';
import styles from './ProjectSection.module.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ProjectSectionProps {
  logo?: string;
  screenshots: string[];
  description: string;
  demoLink: string;
  title: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ screenshots, description, demoLink, title }) => {
  return (
    <div className={styles.container} >
      {/* Logo and Screenshot Carousel */}
      <div className={styles.logoScreenshot}>
        {/* <img src={logo} alt={title + ' logo'} className={styles.logo} /> */}
        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} className={styles.screenshot}>
          {screenshots.map((src, idx) => (
            <div key={idx}>
              <img src={src} alt={title + ' screenshot ' + (idx + 1)} className={styles.screenshot} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* Description and Demo Link */}
      <div className={styles.descriptionBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className={styles.demoLink}>link</a>
      </div>
    </div>
  );
};

export default ProjectSection; 