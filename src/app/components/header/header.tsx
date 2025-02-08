"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InstaIcon from "../instaIcon";

const Header = () => {
	const pathName = usePathname();
	const [isScrolling, setIsScrolling] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolling(window.scrollY > 5);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const isActiveLink = (href: string) => pathName === href;

	// Function to toggle menu and handle link click
	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<header
			className={`${styles.header} ${isScrolling ? styles.isScrolling : ""}`}
		>
			<nav className={styles.nav}>
				<div className={styles.logoItem}>
					<Link className={styles.logo} href="/">
						<span>manifesto</span>
						<span>carnaval</span>
					</Link>
				</div>

				<div
					className={`${styles.menuIcon} ${isMenuOpen ? styles.menuOpen : ""}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<div className={styles.bar}></div>
					<div className={styles.bar}></div>
					<div className={styles.bar}></div>
				</div>

				<ul
					className={`${styles.navList} ${
						isMenuOpen ? styles.navListMobile : ""
					}`}
				>
					<li>
						<Link
							href="/sobre"
							className={`${styles.navLink} ${
								isActiveLink("/sobre") ? styles.isActive : ""
							}`}
							onClick={handleLinkClick}
						>
							Sobre
						</Link>
					</li>
					<li>
						<Link
							href="/galeria"
							className={`${styles.navLink} ${
								isActiveLink("/galeria") ? styles.isActive : ""
							}`}
							onClick={handleLinkClick}
						>
							Galeria
						</Link>
					</li>
					<li>
						<Link
							href="/catalogo"
							className={`${styles.navLink} ${
								isActiveLink("/catalogo") ? styles.isActive : ""
							}`}
							onClick={handleLinkClick}
						>
							Catálogo
						</Link>
					</li>
					<li>
						<Link
							href="/artistas"
							className={`${styles.navLink} ${
								isActiveLink("/artistas") ? styles.isActive : ""
							}`}
							onClick={handleLinkClick}
						>
							Artistas
						</Link>
					</li>
					<li>
						<Link
							href="/contato"
							className={`${styles.navLink} ${
								isActiveLink("/contato") ? styles.isActive : ""
							}`}
							onClick={handleLinkClick}
						>
							Contato
						</Link>
					</li>
					<li className={styles.social}>
						<InstaIcon size={48} color="var(--baseBlue)" />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
