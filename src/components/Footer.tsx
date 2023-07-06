import styles from "@/styles/Home.module.css";

interface PageProps {
}

const Footer = ({}: PageProps) => {
    return <footer className={styles.footerContainer}>
        <div className="gradient" style={{transform: 'rotate(180deg)'}}></div>
        <div className={styles.footer}>
            Copyright © 2023 Abramov Danila. All rights reserved.
        </div>
    </footer>
};

export default Footer;

