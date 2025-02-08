import styles from "./page.module.css";

export default function Contact() {
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<h1 className={styles.title}>Catálogo</h1>
				<iframe
					className={styles.pdf}
					src="https://drive.google.com/file/d/1ZgNMhgx74SrJHvkZ37RU2i93Oqg3ztjA/preview"
					width="800"
					height="600"
					allow="autoplay"
				></iframe>
			</section>
		</main>
	);
}
