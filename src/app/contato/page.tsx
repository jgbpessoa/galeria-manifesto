import styles from "./page.module.css";

export default function Contact() {
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<h1 className={styles.title}>Contato</h1>
				<p className={styles.description}>
					Estamos animados para compartilhar nossa exposição com você!{" "}
					<br />
					<br />
					Se você tem alguma dúvida ou deseja saber mais sobre as
					obras em exibição, nossa equipe está à disposição para
					ajudar. Entre em contato conosco através do email{" "}
					<a href="mailto:manifestocarnaval@gmail.com">
						manifestocarnaval@gmail.com
					</a>{" "}
					e responderemos o mais breve possível.
				</p>
				<div className={styles.star}></div>
				<div className={styles.instagramContainer}>
					<a
						href="https://www.instagram.com/micaelaiv/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.instagramLink}
					>
						@micaelaiv
					</a>
					<a
						href="https://www.instagram.com/brandaopaz/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.instagramLink}
					>
						@brandaopaz
					</a>
				</div>
			</section>
		</main>
	);
}
