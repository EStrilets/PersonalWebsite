import React from 'react'
import styles from './form.module.css'
import ContactFormBtn from './ContactFormBtn';

export default function ContactForm() {

    async function handleOnSubmit(e) {
      e.preventDefault();

      const formData = {};

      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

      await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    }

  return (
    <div className={styles['form__container']}>
      <form method='post' onSubmit={handleOnSubmit} className={styles['form__wrapper']}>
        <input
          type='text'
          className={styles['form__input']}
          placeholder='Name*'
          name='name'
        />
        <input
          type='email'
          className={styles['form__input']}
          placeholder='Email*'
          name='email'
        />
        <textarea
          className={styles['form__input']}
          placeholder='Message*'
          maxLength='1000'
          name='message'
        ></textarea>
      {/* <button className={styles['form__button-submit']}>Contact!</button> */}
      </form>
        <ContactFormBtn />
    </div>
  );
}
