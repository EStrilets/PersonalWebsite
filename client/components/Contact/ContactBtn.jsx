import React from 'react'
import styles from './contactbtn.module.css'

export default function ContactBtn() {
  return (
    <div onClick={() => console.log('hello')} class={styles.spinner}>
      <span>C</span>
      <span>O</span>
      <span>N</span>
      <span>T</span>
      <span>A</span>
      <span>C</span>
      <span>T</span>
    </div>
  );
}
