import React from 'react';
import styles from './ProjectSection.module.css';

interface ProjectSectionProps {
  logo: string;
  screenshot: string;
  description: string;
  demoLink: string;
  title: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ screenshot, description, demoLink, title }) => {
  return (
    <div className={styles.container} >
      {/* Logo and Screenshot */}
      <div className={styles.logoScreenshot}>
        {/* <img src={logo} alt={title + ' logo'} className={styles.logo} /> */}
        <img src={screenshot} alt={title + ' screenshot'} className={styles.screenshot} />
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