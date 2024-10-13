import { useState } from "react";
import styles from "./Contacts.module.css";

export const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const form = event.target;

    // Create FormData object
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset(); // Reset the form
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      {submitted && <p className={styles.success}>Your message has been sent!</p>}
      {error && <p className={styles.error}>There was an error sending your message. Please try again.</p>}

      <form
        className={styles.wrapper}
        action="https://formsubmit.co/2a80c43f51794b803bdc1dd6f4160a80"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className={styles.textareas}>
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Your message"
            required
          />
          <button className={styles.send} type="submit">
            <img className={styles.icon} src={`${process.env.PUBLIC_URL}/assets/actions/send.png`} alt="Send" />
          </button>
        </div>
      </form>
    </div>
  );
};
