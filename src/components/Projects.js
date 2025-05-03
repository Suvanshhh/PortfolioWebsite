import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <ul>
        <li><strong>Project One:</strong> Description of project one.</li>
        <li><strong>Project Two:</strong> Description of project two.</li>
        <li><strong>Project Three:</strong> Description of project three.</li>
      </ul>
    </section>
  );
}

export default Projects;
