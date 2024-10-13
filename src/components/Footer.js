import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Martin Miller</h1>
      <p>St. Paul, Minnesota, USA</p>
      <p><a href="tel:551-574-2217">551.574.2217</a> | <a href="mailto:milleronic@gmail.com">milleronic@gmail.com</a></p>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/milleronic/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/socials/linkedin.png`}
          alt="social-icon"
          className={styles.icon}
        />
        </a>
        <a href="https://github.com/m-miller">
        <img
          src={`${process.env.PUBLIC_URL}/assets/socials/github.png`}
          alt="social-icon"
          className={styles.icon}
        />
        </a>
      </div>
    </footer>
  );
};