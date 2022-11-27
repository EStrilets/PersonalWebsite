import React from 'react'
import styles from './welcomepage.module.css'

export default function Introduction() {
  return (
    <div className={styles.intro__container}>
      <div className={styles['intro__container-text']}>
        <div className={styles['main-header']}>
          <h1>Hi, I&apos;m Yevgeny Strilets</h1>
          <h1 className={styles['wave']}>👋🏻</h1>
        </div>
        <p>Software developer</p>
      </div>
      <div></div>
    </div>
  );
}
