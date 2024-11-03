import styles from "./page.module.css";
import Button from "./components/button";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<section className={styles.hero}>
					<h1 className={styles.title}>
						<span
							className={`${styles.handwritten} ${styles.firstText}`}
						>
							No
						</span>
						<span className={`${styles.sans} ${styles.firstTitle}`}>
							manifesto
						</span>
						<span className={styles.handwritten}>
							das ruas, sou meu
						</span>
						<span
							className={`${styles.sans} ${styles.secondTitle}`}
						>
							carnaval
						</span>
					</h1>
					<p className={styles.description}>
						A exposição destaca as 12 modalidades de manifestações
						populares carnavalescas pernambucanas e suas
						representatividades, homenageando a cultura popular e a
						arte urbana a partir de obras inéditas das artistas
						visuais{" "}
						<span className={styles.bold}>Micaela Almeida</span> e{" "}
						<span className={styles.bold}>Paz Brandão</span>.
					</p>
					<Button
						text="explorar obras ➜"
						type="blue"
						href="/explorar/"
					/>
				</section>
			</main>
		</div>
	);
}
