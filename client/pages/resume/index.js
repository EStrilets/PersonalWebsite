import React from 'react'
import styles from '../../styles/Resume.module.css'
import Timeline from '../../components/timeline/Timeline'
import Navbar from '../../components/nav/Navbar'

export default function ResumeList() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Timeline />
      </div>
    </div>
  );
}

ResumeList.getLayout = function PageLayout(page) { 
  return ( 
    <>
     <Navbar burgerMenu={true} />
     <>
     {page}
     </>
    </>
  )
}