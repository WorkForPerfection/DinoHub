// import{useNavigate} from "react-router-dom";

import {useNavigate} from "react-router-dom";
import styles from "./general.module.css";

export function DinoEgg(){
    // const navigate = useNavigate();
    const navigate = useNavigate();
    return (
        <dev className={styles.content_begin}>
        <button onClick={()=>navigate(-1)}> Back </button>
            DinoEgg
        </dev>
    );
}