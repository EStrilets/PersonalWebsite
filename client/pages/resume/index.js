import React from 'react'
import styles from '../../styles/Resume.module.css'
import ResumePages from '../../containers/Resume/ResumePages';
import Timeline from '../../components/timeline/Timeline';
import Link from 'next/link';

export default function ResumeList() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Timeline />
      </div>
    </div>
  );
}