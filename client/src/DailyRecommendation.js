import { useNavigate } from "react-router-dom";
import styles from "./general.module.css";
import DailyDinoPage from "./DailyRecommendation/DailyDinoPage";
import { MINT, NAVY } from "./css/colors"
import Container from "react-bootstrap/Container"
import { textAlign } from "@mui/system";

export function DailyRecommendation() {
    const navigate = useNavigate();

    const buttonStyle = {
        backgroundColor: 'white',
        color: NAVY,
        fontFamily: 'dinopia-r',
        margin: '1rem',
        borderColor: MINT,
        textAlign: 'center'
    }

    return (
        <Container>
            <Container style={{ textAlign: 'center' }}>
                <button style={buttonStyle} onClick={() => { navigate(-1) }}> {'<'} Back </button>
            </Container>
            <DailyDinoPage />
        </Container>
    );
}