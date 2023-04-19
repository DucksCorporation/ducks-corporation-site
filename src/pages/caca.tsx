import styles from "@/styles/caca.module.scss";
import { useState, useEffect } from "react";

type Data = {
    boss: string;
    pv: number;
}

export default () => {
    const [data, setData] = useState<null | Data>(null);

    useEffect(() => {
        void fetch("/api/boss_data")
            .then(r => r.json())
            .then(d => setData(d));
    }, []);

    if (!data) {
        return (
            <p>Récupération des données...</p>
        )
    }

    return (
        <div>
            <p>Le boss: {data.boss}</p>
            <>PV: {data.pv}</>
        </div>
    )
}
