import styles from "./page.module.css";
import Image from "next/image";
import aboutImage from "./public/assets/images/photos/sobre.webp";

export default function About() {
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<h1 className={styles.title}>Sobre</h1>
				<Image
					src={aboutImage}
					alt="Foto mostrando o espaço da exposição"
					className={styles.image}
				/>
				<p className={styles.description}>
					A mostra "No Manifesto das Ruas, Sou Meu Carnaval" apresenta
					frestas para vivenciar um campo sensível e de saberes das
					manifestações populares carnavalescas de Pernambuco.
					Inspiradas pelo catálogo das Agremiações Carnavalescas do
					Recife e Região Metropolitana, as artistas{" "}
					<span className={styles.artist}>Micaela Almeida</span> e{" "}
					<span className={styles.artist}>Paz Brandão</span>,
					compartilham sua poética por meio de 24 obras inéditas,
					produzidas para representar as 12 modalidades carnavalescas.
					Ao entrelaçar os fios simbólicos dessas tradições, a
					exposição abre caminho para reflexões sobre a memória
					coletiva e o legado cultural, demonstrando como a arte
					contemporânea pode preservar e revitalizar esses elementos
					de maneira significativa. <br /> <br /> A costura das
					narrativas ancestrais com abordagens do agora, cria um lugar
					de encontro, com intenção de enfatizar a magia dessas
					expressões populares, este elo entre passado e o presente
					enriquece a compreensão da herança dessas linguagens
					culturais, especialmente das manifestações dos povos
					originários e da cultura negra. Dessa forma, o espaço
					expositivo pode ser visto como um portal para um universo de
					encantos, onde reafirma seu valor como parte fundamental da
					cultura, identidade e história de Pernambuco. <br />
					<br /> <span className={styles.author}>Thaes Arruda</span>
				</p>
			</section>
		</main>
	);
}
