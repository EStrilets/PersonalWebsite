import React, { useState } from 'react'
import styles from './form.module.css'
import ContactFormBtn from './ContactFormBtn';

export default function ContactForm() {
  //  const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  //  })

  //  const {name, email, message} = values

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

    // const handleOnSubmit = async e => { 
    //   e.preventDefault();
    //   try { 
    //     await fetch('/client/pages/api/mail.js', {
    //       method: 'POST',
    //       headers: {
    //         "Content-Type" : 'application/json'
    //       },
    //       body: JSON.stringify(values)
    //     })
    //   } catch(error) { 
    //     console.log(error)
    //     if (error.response) {
    //       console.log(error.response.body);
    //     }
    //   }
    // }

  // const handleChange = e => setValues({...values, [e.target.name]: e.target.value})

  return (
    <div className={styles['form__container']}>
      <form method='post' onSubmit={handleOnSubmit} className={styles['form__wrapper']}>
        <input
          type='text'
          className={styles['form__input']}
          placeholder='Name*'
          name='name'
          // value={name}
          //  onChange={handleChange}
        />
        <input
          type='email'
          className={styles['form__input']}
          placeholder='Email*'
          name='email'
          // value={email}
          // onChange={handleChange}
        />
        <textarea
          className={styles['form__input']}
          placeholder='Message*'
          maxLength='1000'
          // onChange={handleChange}
          name='message'
          // value={message}
        ></textarea>
      <button className={styles['form__button-submit']}>Contact!</button>
      </form>
        {/* <ContactFormBtn /> */}
    </div>
  );
}
