import { useSession, signIn, signOut } from "next-auth/react";
import styles from '@/styles/components/login-btn.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default () => {
  const { data: session } = useSession();

  if(session) {
    //document.location.href = "dashboard";
    return (
      <>
        <div className="dropdown">
            <div className={styles["div-profile"]}>
                <input type="image" id={styles["user-img"]} alt="La photo de profil de l'utilisateur." src={session.user?.image || ""} className={styles["user-data"]} onClick={() => showDropMenu(true)}/>
                <p className={styles["user-data"]} id={styles["user-name"]} onClick={() => showDropMenu(true)}><strong>{session.user?.name}</strong></p>
            </div>

            <div id="dropdown-content" className={styles["dropdown-content"]}>
              <Link href="dashboard">Mes serveurs</Link><br/>
              <Link href= "/" onClick={() => signOut()}>Me deconnecter</Link>
            </div>
        </div>
      </>
    )
  }

  return (
    <>
        <button onClick={() => signIn()} className={styles["login-btn"]}>
            <div className={styles["login-div"]}>
              <Image width={40} height={30} src="/discord-logo.png" alt="Le logo Discord." className={styles["discord-logo-img"]}/> 
              Se connecter avec Discord
            </div>
        </button>
    </>
  )
};


const showDropMenu = (b: Boolean) => {
    document.getElementById("dropdown-content")!.style.display = b === true ? "block" : "none";
};