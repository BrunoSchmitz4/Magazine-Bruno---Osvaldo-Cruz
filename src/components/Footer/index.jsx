import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.marca}>Magazine Bruninho</p>
      <p className={styles.texto}>© 2026 · Tudo de A à Z</p>
    </footer>
  );
}
