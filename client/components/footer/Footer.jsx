import React from 'react'
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles['container']}>
      <div className={`${styles['bird-container']} ${styles['bird-container--one']}`}>
        <div className={`${styles['bird']} ${styles['bird--one']}`}></div>
      </div>

      <div className={`${styles['bird-container']} ${styles['bird-container--two']}`}>
        <div className={`${styles['bird']} ${styles['bird--two']}`}></div>
      </div>

      <div className={`${styles['bird-container']} ${styles['bird-container--three']}`}>
        <div className={`${styles['bird']} ${styles['bird--three']}`}></div>
      </div>

      {/* <div className={`${styles['bird-container']} ${styles['bird-container--four']}`}>
        <div className={`${styles['bird']} ${styles['bird--four']}`}></div>
      </div> */}
    </div>
  );
}
