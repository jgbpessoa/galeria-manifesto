import { useEffect, useState } from "react";
import styles from "./modal.module.css";
import Image, { StaticImageData } from "next/image";
import { get } from "http";

interface TechnicalData {
	name: string;
	size: string;
	artist: string;
	technique: string;
	type: string;
	isVertical?: boolean;
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: { src: StaticImageData; data: TechnicalData }[];
	initialIndex: number;
}

const Modal = ({ isOpen, onClose, images, initialIndex }: ModalProps) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	const nextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length,
		);
	};

	if (!isOpen) return null;

	const { src, data } = images[currentIndex];

	const getIconFromType = (type: string) => {
		switch (type) {
			case "Bloco de Pau e Corda":
				return (
					<i className={`${styles.icon} ${styles.blocoPauCorda}`}></i>
				);
			case "Escola de Samba":
				return (
					<i className={`${styles.icon} ${styles.escolaSamba}`}></i>
				);
			case "Clube de Frevo":
				return (
					<i className={`${styles.icon} ${styles.clubeFrevo}`}></i>
				);
			case "La Ursa":
				return <i className={`${styles.icon} ${styles.laUrsa}`}></i>;
			case "Caboclinhos":
				return (
					<i className={`${styles.icon} ${styles.caboclinhos}`}></i>
				);
			case "Afoxé":
				return <i className={`${styles.icon} ${styles.afoxe}`}></i>;
			case "Boi de Carnaval":
				return (
					<i className={`${styles.icon} ${styles.boiCarnaval}`}></i>
				);
			case "Clube de Bonecos":
				return (
					<i className={`${styles.icon} ${styles.clubeBonecos}`}></i>
				);
			case "Maracatu Nação":
				return (
					<i className={`${styles.icon} ${styles.maracatuNacao}`}></i>
				);
			case "Maracatu Rural":
				return (
					<i className={`${styles.icon} ${styles.maracatuRural}`}></i>
				);
			case "Tribo de Índio":
				return (
					<i className={`${styles.icon} ${styles.triboIndios}`}></i>
				);
			case "Troça Carnavalesca":
				return (
					<i
						className={`${styles.icon} ${styles.trocaCarnavalesca}`}
					></i>
				);
		}
	};

	const getElementFromType = (type: string) => {
		switch (type) {
			case "Bloco de Pau e Corda":
				return (
					<>
						<span className={styles.handwritten}>Bloco de</span> pau
						<span className={styles.handwritten}>e</span> corda
						{getIconFromType(type)}
					</>
				);
			case "Maracatu Rural":
				return (
					<>
						maracatu
						<span className={styles.handwritten}>Rural</span>
						{getIconFromType(type)}
					</>
				);
			case "Maracatu Nação":
				return (
					<>
						maracatu
						<span className={styles.handwritten}>Nação</span>
						{getIconFromType(type)}
					</>
				);
			case "La Ursa":
				return (
					<>
						<span className={styles.handwritten}>La</span>ursa
						{getIconFromType(type)}
					</>
				);
			case "Clube de Frevo":
				return (
					<>
						<span className={styles.handwritten}>Clube de</span>
						frevo
						{getIconFromType(type)}
					</>
				);
			case "Clube de Bonecos":
				return (
					<>
						<span className={styles.handwritten}>Clube de</span>
						bonecos
						{getIconFromType(type)}
					</>
				);
			case "Boi de Carnaval":
				return (
					<>
						<span className={styles.handwritten}>Boi de</span>
						carnaval
						{getIconFromType(type)}
					</>
				);
			case "Caboclinhos":
				return (
					<>
						<span className={styles.handwritten}>Caboclinhos</span>
						{getIconFromType(type)}
					</>
				);
			case "Afoxé":
				return (
					<>
						<span className={styles.handwritten}>Afoxé</span>
						{getIconFromType(type)}
					</>
				);
			case "Escola de Samba":
				return (
					<>
						<span className={styles.handwritten}>Escola de</span>
						samba
						{getIconFromType(type)}
					</>
				);
			case "Troça Carnavalesca":
				return (
					<>
						<span className={styles.handwritten}>Troça</span>
						carnavalesca
						{getIconFromType(type)}
					</>
				);
			case "Tribo de Índio":
				return (
					<>
						<span className={styles.handwritten}>Tribo de</span>
						índio
						{getIconFromType(type)}
					</>
				);
		}
	};

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div
				className={styles.modalContent}
				onClick={(e) => e.stopPropagation()}
			>
				<>
					<div className={styles.modalImageContainer}>
						<Image
							src={src}
							alt="Selected artwork"
							className={`${styles.modalImage} ${
								data.isVertical ? styles.vertical : ""
							}`}
						/>
					</div>
					<div className={styles.typeContainer}>
						<p className={styles.type}>
							{getElementFromType(data?.type)}
						</p>
					</div>
					<div className={styles.technicalData}>
						<p>
							<strong className={styles.technicalTitle}>
								Título da Obra
							</strong>
							: "{data?.name}"
						</p>
						<p>
							<strong className={styles.technicalTitle}>
								Autoria
							</strong>
							: {data?.artist}
						</p>
						<p>
							<strong className={styles.technicalTitle}>
								Dimensões
							</strong>
							: {data?.size}
						</p>
						<p>
							<strong className={styles.technicalTitle}>
								Técnica
							</strong>
							: {data?.technique}
						</p>
					</div>
					<button className={styles.closeButton} onClick={onClose}>
						x
					</button>
					<div className={styles.navigation}>
						<button
							className={styles.prevButton}
							onClick={prevImage}
						>
							&#10094;
						</button>
						<button
							className={styles.nextButton}
							onClick={nextImage}
						>
							&#10095;
						</button>
					</div>
				</>
			</div>
		</div>
	);
};

export default Modal;
