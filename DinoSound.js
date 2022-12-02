import { useNavigate } from "react-router-dom";
import styles from "./general.module.css";
import DinoSounds from "./DinoSounds";
import { MINT, NAVY } from "./css/colors"
import Container from "react-bootstrap/Container"
import { textAlign } from "@mui/system";

export function DinoSound() {
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
            <DinoSounds />
        </Container>
    );
}




// <Link style={linkStyle} to="/dino_audio">Dino Sounds</Link>


// // <Nav>
// // <button style={buttonStyle} onClick={() => { navigate("/dino_audio") }}> Dino Sounds </button>
// // </Nav>


// <Route path="/dino_audio" element={<DinoSounds />} />
