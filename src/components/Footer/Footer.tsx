import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <small>All rights reserved. All trademarks and copyrights are the property of their respective owners.</small>
      </div>
      <div className={styles.footerContent}>
        <small>This site uses no cookies.</small>
      </div>
    </footer>
  );
} 