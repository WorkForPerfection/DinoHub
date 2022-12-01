import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import styles from "./general.module.css";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ListGroup from "react-bootstrap/ListGroup"

import "./css/App.css"
import { MAROON, MINT, NAVY } from "./css/colors"

const listStyle =  { backgroundColor: 'rgba(255, 255, 255, 0.4)'}

function Back(margin = '2rem') {

    const navigate = useNavigate();
    return <button className="button-d" style={{ margin: margin }} onClick={() => navigate(-1)}> {'<'}Back </button>
}

export function DinoPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const dinoname = location.state.curname;
    const [dinoInfo, setdinoInfo] = useState([]);
    const [upd, setUpd] = useState(false);                               //this is used to trigger useEffect(); similar to this.forceUpdate();
    useEffect(() => {
        axios.post("http://localhost:8080/dino_page", { name: dinoname }).then(
            (response) => {
                setdinoInfo(response.data);
            }
        ).catch();
    }, [dinoInfo, upd])
    const dinoDisplay = (
        <Container>
            {dinoInfo.map((dino) =>
                <Card style={{
                    width: '100%',
                    height: '30%'
                }}>
                    <Card.Header style={{ backgroundColor: MINT }}>
                        <h3 style={{ fontFamily: 'dinopia-l', color: '#2C466C' }}></h3>
                    </Card.Header>
                    <Card.Body>
                        <Container>
                            <Row style={{ textAlign: 'center', verticalAlign: 'center' }}>
                                <Row>
                                    <Card.Text style={{ fontFamily: 'dinopia-r', fontSize: '5rem' }}>
                                        <span className='capital-letter'>{dino.name.slice(0, 1)}</span>
                                        {dino.name.slice(1)}
                                    </Card.Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <img
                                            src={require(`${dino.dino_picture}`)}
                                            style={{
                                                height: 'auto',
                                                width: '30rem',
                                                margin: '3rem 0 0 0'
                                            }} />
                                    </Col>
                                    <Col md={{ span: 3, offset: 0 }}>
                                        <img
                                            src={require(`${dino.dino_size_picture}`)}
                                            style={{
                                                height: 'auto',
                                                width: '30rem',
                                                margin: '3rem 0 0 0'
                                            }} />
                                    </Col>
                                    <Col>
                                        <ListGroup
                                            className="list-group-flush"
                                            style={{
                                                fontFamily: 'dinopia-r',
                                                fontSize: '1.5rem',
                                                backgroundColor: 'rgba(255, 255, 255, 0.01)',
                                                width: '20rem'
                                            }}>
                                            <ListGroup.Item style={listStyle}>Type: {dino.type}</ListGroup.Item>
                                            <ListGroup.Item style={listStyle}>Diet: {dino.period}</ListGroup.Item>
                                            <ListGroup.Item style={listStyle}>Found in: {dino.found_in}</ListGroup.Item>
                                            <ListGroup.Item style={listStyle}>Diet: {dino.Diet}</ListGroup.Item>
                                            <ListGroup.Item style={listStyle}>Length: {dino.Length}</ListGroup.Item>
                                            <ListGroup.Item style={listStyle}>likes: {dino.Likes}</ListGroup.Item>
                                        </ListGroup>

                                        <button
                                            onClick={() => { likeDino(); }}
                                            style={{
                                                fontFamily: 'dinopia-l',
                                                backgroundColor: 'transparent',
                                                borderWidth: '0',
                                                margin: '1rem',
                                                fontSize: '2rem',
                                                color: NAVY

                                            }}>
                                            👍</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Container>
                    </Card.Body>
                    {/* <Card.Body>
                <Card.Text style={{ fontFamily: 'dinopia-l' }}>{dino.discription}</Card.Text>
            </Card.Body> */}

                </Card>
            )
            }
        </Container>

    );
    const likeDino = () => {
        const data = { dinoname };
        let curlikes;
        axios.post("http://localhost:8080/add_likes", data).then(
            (response) => {
                curlikes = response.data;
            }
        );
        console.log(curlikes);
        setUpd(upd == true ? false : true);
    }
    if (dinoInfo.length === 0) {
        return (
            <Container style={{ textAlign: 'center' }}>
                <button className="button-d" style={{ margin: '2rem' }} onClick={() => navigate(-1)}> {'<'}Back </button>
                <div style={{ fontSize: '2.5rem', fontFamily: 'dinopia-l', textAlign: 'center' }}>
                    Sorry, the dinosaur you entered is invisible to the naked eye
                    <div>#dino 404 cry cry#</div>
                </div>
                <div style={{ fontFamily: 'dinopia-l', margin: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>*** To start another search, please use the <Back mergin='0' /> button to return to the previous page, or go back to <b>home</b>. ***</div>
            </Container>
        )
    }
    else return (
        <Container style={{ textAlign: 'center' }}>
            <button className="button-d" style={{ margin: '2rem' }} onClick={() => navigate(-1)}> {'<'}Back </button>
            {dinoDisplay}
            <div style={{ fontFamily: 'dinopia-l', margin: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>*** To start another search, please use the <Back mergin='0' /> button to return to the previous page, or go back to <b>home</b>. ***</div>
        </Container>
    );
}