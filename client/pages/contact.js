import React from 'react'
import styles from '../styles/Contacts.module.css'
import ContactForm from '../components/contactForm/ContactForm';

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>
          <ContactForm />
        </h1>
      </div>
    </div>
  );
}