import Image from "next/image";
import InstaIcon from "../instaIcon";
import styles from "./footer.module.css";
import logomarcas from "../../public/assets/images/logomarcas.png";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.logos}>
				<Image
					className={styles.image}
					src={logomarcas}
					alt="Imagem das logomarcas dos parceiros do projeto"
				/>
			</div>
			<InstaIcon size={40} color="var(--baseYellow)" />
			<p className={styles.copyright}>
				© {year} No Manifesto das Ruas, sou meu Carnaval. Todos os
				direitos reservados.
			</p>
		</footer>
	);
};

export default Footer;
