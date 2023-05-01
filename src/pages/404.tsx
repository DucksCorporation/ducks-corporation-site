import Image from "next/image";
import Link from "next/link"
import styles from "@/styles/404.module.scss";

export default function Custom404() {
    return (
        <>
            <div className={styles["main-div"]}>
                <h1>Oups ! On dirait que vous êtes arrivé dans un cul de sac !</h1>
      
                <Image src="/paper-on-head.jpg" alt="Le développeur du site avec un sac papier kraft sur la tête." width={500} height={500} className={styles["img"]}/>

                <button className={styles["back-btn"]}>
                    <Link href="/">Faire demi-tour</Link>
                </button>
            </div>
        </>
    )
}