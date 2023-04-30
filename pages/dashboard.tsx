import NavBar from "@/components/nav-bar";
import styles from "@/styles/dashboard.module.scss";
import LoginBtn from "@/components/login-btn";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();

    /*const getServers = () => {
        session?.user.g
    };*/

    if(!session) {
        return (
            <nav className={styles["nav"]}>
                <h1>Ouups ! Vous n'êtes pas connecté.</h1>
                <LoginBtn/>
            </nav>
        )
    };

    return (
        console.log(session.user.guilds)
    );
};