import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/nav-bar.module.scss";
import LoginBtn from "@/components/login-btn";

export default () => {
    return (
        <nav className={styles["navbar"]}>
        <Image width={250} height={100} src="/logo.png" alt="Logo du bot." className={styles["navLogo"]}/>

        <ul className={styles["navList"]}>
          <li className={styles["navItem"]}>
            <div className="dropdown ">
              <button className="dropBtn">
                Plugins ˅
              </button>
              <div className="dropdownContent">
                  <Link href="moderation">Modération & gestion du serveur</Link>
                  <Link href="utils">Utilitaires</Link>
                  <Link href="games">Jeux</Link>
                  <Link href="commandsList">Liste des commandes</Link>
              </div>
            </div>
            <Link href="https://discord.gg/QMNu7V8awE" className={styles["navLinks"]} target="_blank" rel="noreferrer">Serveur de support</Link>
            <Link href="documentation" className={styles["navLinks"]} target="_blank" rel="noreferrer">Documentation</Link>
            <Link href="#features" className={styles["navLinks"]}>Fonctionnalités</Link>

            <LoginBtn/>
          </li>
        </ul>
        </nav>
    );
};