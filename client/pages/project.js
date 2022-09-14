import React from 'react'
import styles from '../styles/Project.module.css'
import Card from '../components/card/Card';

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card />
      </div>
    </div>
  );
}
