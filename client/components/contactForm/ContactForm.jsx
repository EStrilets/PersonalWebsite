import React, { useState } from 'react'
import styles from './form.module.css'
import ContactFormBtn from './ContactFormBtn';

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstName.length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/mail", {
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send!");
        setFirstName("")
        setLastName("")
        setEmail("")
        setMessage("")
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Sent!");
      setFirstName("")
      setLastName("")
      setEmail("")
      setMessage("")
    }
  };

  return (
    <div className={styles['form__container']}>
      <p> Contact form </p>
      <form
        method='post'
        onSubmit={handleSubmit}
        className={styles['form__wrapper']}
      >
        <div className={styles['username-wrapper']}>
          <input
            type='text'
            className={styles['form__input-username']}
            placeholder='First name*'
            name='first-name'
            required
            data-testid='username-input'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type='text'
            className={styles['form__input-username']}
            placeholder='Last name*'
            name='last-name'
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <input
          type='email'
          value={email}
          required
          data-testid='email-input'
          className={styles['form__input']}
          placeholder='Email*'
          name='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          className={styles['form__input-message']}
          value={message}
          required
          data-testid='msg-input'
          placeholder='Message*'
          maxLength='1000'
          name='message'
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button className={styles['form__button-submit']}>{buttonText}</button>
        {/* <ContactFormBtn onSumbit={handleSubmit} buttonText={buttonText} /> */}
      </form>
      <div className={styles['notification-container']}>
        {showSuccessMessage && (
          <p>
            Thank you! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p>
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </div>
  );
}
