import styles from "./button.module.css";
import Link from "next/link"; // Import Link from Next.js if using for navigation

const Button = ({
  text,
  type,
  href = "",
  onClick,
}: {
  text: string;
  type: string;
  href?: string;
  onClick?: () => void;
}) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${styles[type]}`}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
