import { useNavigate } from "react-router-dom";
import styles from "./general.module.css";
import DailyDinoPage from "./DailyRecommendation/DailyDinoPage";
import { MINT, NAVY } from "./css/colors"

export function DailyRecommendation() {
    const navigate = useNavigate();

    const buttonStyle = {
        backgroundColor: 'white',
        color: NAVY,
        fontFamily: 'dinopia-r',
        margin: '0.8rem',
        borderColor: MINT
    }

    return (
        <div className={styles.content_begin}>
            <button style={buttonStyle} onClick={() => { navigate(-1) }}> {'<'} Back </button>
            <DailyDinoPage />
        </div>
    );
}