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
					Se você tem alguma dúvida, deseja saber mais sobre as obras
					em exibição, ou gostaria de organizar uma visita em grupo,
					nossa equipe está à disposição para ajudar. Entre em contato
					conosco através do email{" "}
					<a href="mailto:manifestocarnaval@gmail.com">
						manifestocarnaval@gmail.com
					</a>{" "}
					e responderemos o mais breve possível.
					<br />
					<br />
					Ficaremos felizes em esclarecer qualquer questão e ajudar
					você a ter uma boa experiência na nossa exposição. Esperamos
					ansiosos pelo seu contato e, claro, pela sua visita para
					celebrar a riqueza cultural do nosso estado!
					<br />
					<br />
					Estamos abertos para visitas do dia 03 de novembro até 02 de
					dezembro, de quarta a domingo (10h às 16h) na Casa do
					Carnaval com entrada gratuita.
				</p>
				<div className={styles.mapContainer}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4979.071446388319!2d-34.88153477499214!3d-8.066998191960845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1925c7c2ded1%3A0xd2026aa7d7f34221!2sCasa%20do%20Carnaval!5e1!3m2!1spt-BR!2sbr!4v1730644962660!5m2!1spt-BR!2sbr"
						style={{ border: "0" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className={styles.map}
					></iframe>
				</div>
			</section>
		</main>
	);
}
