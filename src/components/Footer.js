import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Daniel Macias. All rights reserved.</p>
    </footer>
  );
};

export default Footer;