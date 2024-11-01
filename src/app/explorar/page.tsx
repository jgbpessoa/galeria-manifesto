import styles from "./page.module.css";
import Button from "@/components/button";

export default function Explore() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Explorar</h1>
        </section>
      </main>
    </div>
  );
}
