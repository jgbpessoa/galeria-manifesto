import styles from "./page.module.css";
import Image from "next/image";
import micaImage from "../../../public/assets/images/photos/mica.webp";
import pazImage from "../../../public/assets/images/photos/paz.webp";

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
							Micaela Almeida, natural de
							Recife-Pernambuco-Brasil, é uma artista de criações
							em diversas linguagens, incluindo pinturas, colagem,
							escrita e tatuagem. Idealiza e produz editais
							culturais produzindo obras artísticas, além de
							facilitar aulas arte-educativas e realizar a
							expografia e montagem de exposições. Em suas obras
							busca comunicar a natureza humana e contribuir na
							libertação mental coletiva sob a perspectiva de
							indagações sociais pertinentes. <br />
							Iniciou as práticas artísticas em 2016 a partir da
							intervenção urbana com cartazes de lambe-lambe
							colados no espaço público, com mensagens para
							quebrar os padrões opressores impostos às mulheres.
							Em 2018 começa a desenvolver trabalhos de graffiti e
							pintura muralista. Participou de exposições
							coletivas em lugares como o Museu da Abolição, Paço
							do Frevo e Casa do Carnaval, em Recife, e na
							Pinacoteca Potiguar de Natal/RN. Em 2023 destaca-se
							pela pintura do 1º megamural do mundo em homenagem
							ao percussionista Naná Vasconcelos, localizado na
							Rua Princesa Isabel, em frente ao Parque 13 de Maio.
							Em 2024 retratou 12 manifestações populares do
							carnaval pernambucano através da pintura, colagem e
							costura com a exposição “No Manifesto das Ruas, Sou
							Meu Carnaval”. A artista compõe a Comissão de
							Acompanhamento do Gabinete de Inovação Urbana, da
							Prefeitura do Recife, um canal voluntário entre a
							classe artística local e o poder público.
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
