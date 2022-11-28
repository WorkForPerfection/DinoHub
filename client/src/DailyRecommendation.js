import{useNavigate} from "react-router-dom";
import styles from "./general.module.css";

export function DailyRecommendation(){
    const navigate = useNavigate();
    return (
        <dev className={styles.content_begin}>
            <button onClick={()=>{navigate(-1)}}> Back </button>
            Daily Recommend
        </dev>
    );
}