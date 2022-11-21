import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

export default function ContactBtn() {
    return (
      <>
        <Link href='/contact'>
          <div className={styles['spinner']} data-testid='contact-btn'>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </div>
        </Link>
      </>
    );
    
}
