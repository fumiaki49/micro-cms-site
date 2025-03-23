import styles from "./index.module.css";

type props = {
  href: string;
  children: React.ReactNode;
};

function ButtonLink({ href, children }: props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}

export default ButtonLink;
