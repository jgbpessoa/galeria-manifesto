"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [isScrolling, setisScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setisScrolling(true);
      } else {
        setisScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to determine if the link is active
  const isActiveLink = (href: string) => pathName === href;

  return (
    <header
      className={`${styles.header} ${isScrolling ? styles.isScrolling : ""}`}
    >
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.logoItem}>
            <Link className={styles.logo} href="/">
              <span>Manifesto</span>
              <span>Carnaval</span>
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
