import React from 'react'
import styles from '../styles/Project.module.css'
import Projects from '../containers/Projects/Projects'

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Projects />
      </div>
    </div>
  );
}
