import React from 'react'
import styles from './contactFormBtn.module.css'

export default function ContactFormBtn({onSumbit, buttonText }) {
  return (
    <div className={styles['button-wrapper']} onClick={onSumbit}>
      <ul className={styles['button__form']}>
        <li>
          <a href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h6> {buttonText} </h6>
          </a>
        </li>
      </ul>
    </div>
  );
}
