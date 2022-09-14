import React from 'react'
import styles from './welcomepage.module.css'
import Links from '../links/Links';

export default function Introduction() {
  return (
    <div className={styles.intro__container}>
      <div className={styles['intro__container-text']}>
        <h1>Hi, I'm Yevgeny Strilets</h1>
          <p>Software developer</p>
      </div>
      <div>
        {/* <Links /> */}
      </div>
    </div>
  );
}
