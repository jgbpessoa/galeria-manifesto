"use client";

import { useState } from "react";
import styles from "./page.module.css";
import imageData from "./data";
import Modal from "@/components/modal";
import Image from "next/image";

export default function Gallery() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		null,
	);

	const openModal = (index: number) => {
		setSelectedImageIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImageIndex(null);
	};

	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<h1 className={styles.title}>Galeria</h1>
				<p className={styles.warning}>
					🎧 Audiodescrição das obras disponível em breve! 🎧
				</p>
				<p className={styles.warning}>
					🖼️ Clique nas obras para mais informações 🖼️
				</p>
			</section>
			<section className={styles.gallery}>
				{imageData.map((item, index) => (
					<div key={item.data.id} className={styles.imageContainer}>
						<Image
							src={item.src}
							alt={item.data.name}
							className={styles.image}
							onClick={() => openModal(index)}
							loading="lazy"
						/>
					</div>
				))}
			</section>
			{selectedImageIndex !== null && (
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					images={imageData}
					initialIndex={selectedImageIndex}
				/>
			)}
		</main>
	);
}
