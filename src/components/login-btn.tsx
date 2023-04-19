import { useSession, signIn, signOut } from "next-auth/react";
import styles from '@/styles/components/login-btn.module.scss';
import Image from 'next/image';

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return (
      <>
        Connecté en tant que <strong>{session.user?.name}</strong><br/>
        <button onClick={() => signOut()}>Se déconnecter</button>
      </>
    )
  }

  return (
    <>
      <button onClick={() => signIn()} className={styles["login-btn"]}>
        <div className={styles["login-div"]}>
          <Image width={40} height={30} src="/discord-logo.png" alt="Le logo Discord." className={styles["login-img"]}/> 
          Se connecter avec Discord
        </div>
      </button>
    </>
  )
};