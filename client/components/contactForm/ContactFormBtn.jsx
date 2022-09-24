import React from 'react'
import styles from './contactFormBtn.module.css'

export default function ContactFormBtn() {
  return (
    <ul className={styles['button__form']}>
      <li>
        <a href='#'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h6> Contact! </h6>
        </a>
      </li>
    </ul>
  );
}
