import styles from '@/styles/index.module.scss';
import config from "../config.json";

const validEmoji = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="descriptionItemSvg" min="#9B9D9F"><path d="M18 7L9.429 17 6 13" stroke="#9B9D9F" data-stroke="main" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>;

export default function Component() {
    return (
        <section className={styles["descriptionSection"]}>
            <h1 className={styles["descriptionTitle"]}>Configure le meilleur serveur Discord !</h1>
            
            <p className={styles["botDescription"]}>{config.botName} est un bot multifonction réunissant toutes les fonctionnalitées dont vous avez besoin pour votre serveur Discord: <br /></p>
            <ul className={styles["descriptionList"]}>
              <li className={styles["descriptionItem"]}>{validEmoji} Modération & gestion de votre serveur</li>
              <li className={styles["descriptionItem"]}>{validEmoji} Minis-jeux</li>
              <li className={styles["descriptionItem"]}>{validEmoji} Notifications Twitch, YouTube</li>
            </ul>
         </section>
    )
}