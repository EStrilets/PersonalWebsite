import React from 'react'

import styles from './fab.module.css'

const Fab = () => {
  return (
    <div className={styles['fab-container']}>
      <a
        data-testid='fab-btn'
        target='_blank'
        href='https://drive.google.com/file/d/1eemMwJV6Pi2CldF7Peir0kvfq32QWpZC/view?usp=sharing'
      >
        <button className={styles['fab-container_button']}>Resume</button>
      </a>
    </div>
  );
};

export default Fab;