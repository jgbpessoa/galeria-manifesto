import styles from "./page.module.css";
import Image from "next/image";
import micaImage from "../public/assets/images/photos/mica.webp";
import pazImage from "../public/assets/images/photos/paz.webp";

export default function Artists() {
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<h1 className={styles.title}>Artistas</h1>
				<div className={styles.artists}>
					<div className={styles.artist}>
						<div className={styles.artistHeader}>
							<Image
								src={micaImage}
								alt="Foto da artista Micaela Almeida usando óculos escuros no centro do recife com sua obra de Mega Mural de Naná Vasconcelos ao fundo"
								className={styles.image}
							/>
							<h2 className={styles.name}>Micaela Almeida</h2>
						</div>
						<p className={styles.description}>
							Artista multifacetada de Recife, atua na arte urbana
							e na produção cultural. Desde 2016 desenvolve
							projetos focados em pintura muralista, intervenções
							urbanas e arte-educação. Dentre os projetos que
							produziu e realizou destacam-se em 2021 a
							intervenção urbana “Corpo-Território: Grandes
							Mulheres Presentes”, homenageando figuras femininas
							históricas e demarcando espaços significativos para
							mulheres do Recife, pelo qual recebeu o prêmio
							“Inspiradora” no World Creativity Day 2023; a
							intervenção “ColaNelas” em 2022, destacando mulheres
							que constróem diretamente a cultura popular de
							Pernambuco e que lutam contra a invisibilização. A
							artista já teve pinturas expostas no Museu da
							Abolição, Paço do Frevo, CasaZero e na Pinacoteca
							Potiguar/RN. Entre 2022 e 2024, por meio do programa
							Colorindo o Recife, produziu murais significativos e
							oficinas arte-educativas. Seu trabalho mais recente
							é o megamural “Naná Vasconcelos: Sinfonia &
							Batuques”, na qual homenageia o pernambucano eleito
							oito vezes o melhor percussionista do mundo em
							frente ao Parque 13 de Maio. Realizou dois trabalhos
							de pintura em Natal/RN e Recife/PE que convergem na
							temática da valorização comunitária, da pesca
							artesanal e das tradições artesanais locais: a
							revitalização das fachadas do Conselho Comunitário
							de Ponta Negra e da Colônia de Pescadoras/es Z-10 de
							Itapissuma. Atualmente a artista participa da
							Comissão de Acompanhamento do programa Colorindo o
							Recife e desenvolve projetos culturais como "LAJE
							CRIADA", ateliê de serigrafia artesanal, e a
							exposição "No Manifesto das Ruas, Sou Meu Carnaval",
							que ressalta a história das manifestações populares
							do carnaval pernambucano a partir da arte
							contemporânea.
						</p>
					</div>
					<div className={styles.artist}>
						<div
							className={`${styles.artistHeader} ${styles.right}`}
						>
							<Image
								src={pazImage}
								alt="Foto da artista Paz Brandão tocando pandeiro com uma florest ao fundo"
								className={styles.image}
							/>
							<h2 className={styles.name}>Paz Brandão</h2>
						</div>
						<p className={styles.description}>
							Nascida e criada no Recife, artista cujo talento e
							paixão a levaram a se destacar como cantora,
							compositora, atriz, artista plástica, produtora
							cultural, educadora e diretora musical. Sua carreira
							é significativa no cenário cultural pernambucano,
							especialmente como uma das principais responsáveis
							pela Abertura do Carnaval do Recife, atividade que
							exerceu de 2003 a 2023. A artista foi fundamental na
							produção geral do "Ubunto - Encontro dos Afoxés" em
							2014, um evento que celebra a cultura
							afro-brasileira, e em 2024 na Coordenação do Polo
							Pátio do Terço, contribuindo para o rico mosaico
							cultural pernambucano. Com uma forte presença no
							Carnaval, também se destacou como diretora musical e
							cantora em diversas iniciativas, incluindo a
							Quadrilha Junina Raio de Sol, além de participar de
							projetos como "Sambas e Loas", Madrigal Unicap, Voz
							Nagô, Batucafro e com o renomado Naná Vasconcelos
							por mais de uma década. Sua trajetória é marcada por
							uma sólida experiência em produção executiva e
							gestão cultural, com destaque para sua atuação na
							Secretaria de Cultura da Cidade do Recife entre 2002
							e 2018. Durante esse período, ela coordenou a
							Abertura do Carnaval, foi responsável pelo Cadastro
							Cultural do Recife na Casa do Carnaval e participou
							da Comissão dos Ciclos Culturais, onde contribuiu
							para a elaboração do Catálogo das Agremiações
							Carnavalescas de Pernambuco.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
