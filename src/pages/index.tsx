import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/index.module.scss';
import config from "../config.json";
import AccessToken from "@/components/accessToken";
import LoginBtn from "@/components/login-btn";
import BotDescription from "@/components/bot-description";

export default () => {
  return (
    <>
      <Head>
        <title>DucksBot | Menu principal</title>
      </Head>

      <div className={styles["App"]}>
        <nav className={styles["navbar"]}>
          <Image width={250} height={100} src="/logo.png" alt="Logo du bot." className={styles["navLogo"]}/>

          <ul className={styles["navList"]}>
            <li className={styles["navItem"]}>
              <div className="dropdown ">
                <button className="dropBtn">
                  Plugins ˅
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdownContent">
                  <a href="moderation">Modération & gestion du serveur</a>
                  <a href="utils">Utilitaires</a>
                  <a href="games">Jeux</a>
                  <a href="commandsList">Liste des commandes</a>
                </div>
              </div>
              <a href={config.discordSupport} className={styles["navLinks"]} target="_blank" rel="noreferrer">Serveur de support</a>
              <a href="docs" className={styles["navLinks"]} target="_blank" rel="noreferrer">Documentation</a>
              <a href="#idk" className={styles["navLinks"]}>Fonctionnalités</a>
            </li>
            <LoginBtn/>
            <AccessToken/>
          </ul>
        </nav>

        <BotDescription/>
      </div>
    </>
  )
}