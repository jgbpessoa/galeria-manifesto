import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © 2024 No Manifesto das Ruas, sou meu Carnaval. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
