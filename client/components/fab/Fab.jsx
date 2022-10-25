import React, { useState } from 'react'
import Link from 'next/link'

import styles from './fab.module.css'

const Fab = () => {
  console.log(process.env.REACT_APP_RESUME_LINK);
  return (
    <div className={styles['fab-container']}>
      <Link href='https://drive.google.com/file/d/1eemMwJV6Pi2CldF7Peir0kvfq32QWpZC/view?usp=sharing'>
        <a target='_blank'>
          <button className={styles['fab-container_button']}>Resume</button>
        </a>
      </Link>
    </div>
  );
};

export default Fab;