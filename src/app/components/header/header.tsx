"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathName = usePathname();
	const [isScrolling, setisScrolling] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 5) {
				setisScrolling(true);
			} else {
				setisScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const isActiveLink = (href: string) => pathName === href;

	return (
		<header
			className={`${styles.header} ${isScrolling ? styles.isScrolling : ""}`}
		>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.logoItem}>
						<Link className={styles.logo} href="/">
							<span>manifesto</span>
							<span>carnaval</span>
						</Link>
					</li>
					<li>
						<Link
							href="/sobre"
							className={`${styles.navLink} ${
								isActiveLink("/sobre") ? styles.isActive : ""
							}`}
						>
							Sobre
						</Link>
					</li>
					<li>
						<Link
							href="/explorar"
							className={`${styles.navLink} ${
								isActiveLink("/explorar") ? styles.isActive : ""
							}`}
						>
							Explorar
						</Link>
					</li>
					<li>
						<Link
							href="/artistas"
							className={`${styles.navLink} ${
								isActiveLink("/artistas") ? styles.isActive : ""
							}`}
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
						>
							Contato
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
