import React from 'react'
import styles from '../styles/Project.module.css'
import Projects from '../containers/Projects/Projects'
import Navbar from '../components/nav/Navbar';

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Projects />
      </div>
    </div>
  );
}
