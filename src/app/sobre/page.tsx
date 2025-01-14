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
				<h2 className={styles.subtitle}>Apresentação</h2>
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
				<h2 className={styles.subtitle}>Ficha Técnica</h2>
				<table className={styles.table}>
					<tbody>
						<tr>
							<td className={styles.cell}>Artistas</td>
							<td className={styles.cell}>
								Micaela Almeida e Paz Brandão
							</td>
						</tr>
						<tr>
							<td className={styles.cell}>
								Curadoria e Expografia
							</td>
							<td className={styles.cell}>Thaes Arruda</td>
						</tr>
						<tr>
							<td className={styles.cell}>Produção</td>
							<td className={styles.cell}>Cora Fagundes</td>
						</tr>
						<tr>
							<td className={styles.cell}>Montagem</td>
							<td className={styles.cell}>Rômulo Francisco</td>
						</tr>
						<tr>
							<td className={styles.cell}>
								Auxiliar de Montagem
							</td>
							<td className={styles.cell}>Eraldo Braz</td>
						</tr>
						<tr>
							<td className={styles.cell}>Direção de Arte</td>
							<td className={styles.cell}>Micaela Almeida</td>
						</tr>
						<tr>
							<td className={styles.cell}>
								Gestor Casa do Carnaval
							</td>
							<td className={styles.cell}>Paulinho Mafe</td>
						</tr>
						<tr>
							<td className={styles.cell}>
								Administrativo Casa do Carnaval
							</td>
							<td className={styles.cell}>Ewerson Luiz</td>
						</tr>
						<tr>
							<td className={styles.cell}>Educativo</td>
							<td className={styles.cell}>
								Marta Reis e Wilker Silva
							</td>
						</tr>
						<tr>
							<td className={styles.cell}>Estagiários</td>
							<td className={styles.cell}>
								Anthony Assis, Clara Soares, Denildo Costa,
								Jebson Antônio, Juliana Chagas e Sueliton Fagner
							</td>
						</tr>
						<tr>
							<td className={styles.cell}>Identidade Visual</td>
							<td className={styles.cell}>
								Micaela Almeida e Zé Gabriel
							</td>
						</tr>
						<tr>
							<td className={styles.cell}>
								Design Gráfico e Diagramação
							</td>
							<td className={styles.cell}>Zé Gabriel</td>
						</tr>
						<tr>
							<td className={styles.cell}>
								Desenvolvedor Web Site
							</td>
							<td className={styles.cell}>Zé Gabriel</td>
						</tr>
						<tr>
							<td className={styles.cell}>Incentivo</td>
							<td className={styles.cell}>
								Edital Funcultura Geral - 2021/2022 - Secult /
								Fundarpe
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</main>
	);
}
