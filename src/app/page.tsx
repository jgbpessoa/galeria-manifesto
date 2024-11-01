import styles from "./page.module.css";
import Button from "./components/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            <span className={styles.handwritten}>No</span>
            <span className={styles.sans}>manifesto</span>
            <span className={styles.handwritten}>das ruas, sou meu</span>
            <span className={styles.sans}>carnaval</span>
          </h1>
          <Button text="explorar ➜" type="blue" href="/explorar/" />
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            sequi veritatis ad, rem enim incidunt minus saepe mollitia. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          {/* <span className={styles.laUrsa}></span>
          <span className={styles.afoxe}></span>
          <span className={styles.troca}></span>
          <span className={styles.boiDeCarnaval}></span>
          <span className={styles.clubeDeFrevo}></span>
          <span className={styles.escolaDeSamba}></span> */}
        </section>
      </main>
    </div>
  );
}
