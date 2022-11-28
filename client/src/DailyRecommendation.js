import{useNavigate} from "react-router-dom";
import styles from "./general.module.css";
import DailyDinoPage from "./DailyRecommendation/DailyDinoPage";

export function DailyRecommendation(){
    const navigate = useNavigate();
    return (
        <div className={styles.content_begin}>
            <button onClick={()=>{navigate(-1)}}> Back </button>
            <DailyDinoPage/>
        </div>
    );
}