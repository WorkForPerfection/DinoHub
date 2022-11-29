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
import { MINT, NAVY } from "./css/colors"
import dino from "./DailyRecommendation/services/dino";

export function DinoPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const dinoname = location.state.curname;
    const [dinoInfo, setdinoInfo] = useState([]);
    useEffect(() => {
        axios.post("http://localhost:8080/dino_page", { name: dinoname }).then(
            (response) => {
                setdinoInfo(response.data);
            }
        ).catch()
    }, [])
    const dinoDisplay = (
        <Container>
            {dinoInfo.map((dino) =>
                //         <Container>
                //             <Card>
                //                 <Card.Header>
                //                     Dinosaur Name: {dino.name} <br />
                //                     Dinosaur Type: {dino.type} <br />
                //                     The period they lived in: {dino.period} <br />
                //                     Where they were found: {dino.found_in} <br />
                //                     Diet: {dino.Diet} <br />
                //                     Length: {dino.Length} <br />
                //                     <img src={require(`${dino.dino_picture}`)} />
                //                     <img src={require(`${dino.dino_size_picture}`)} />
                //                 </Card.Header>
                //             </Card>
                //         </Container>
                <Card style={{
                    width: '100%',
                    height: '30%'
                }}>
                    <Card.Header style={{ backgroundColor: MINT }}>
                        <h3 style={{ fontFamily: 'dinopia-l', color: '#2C466C' }}></h3>
                    </Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col md={{ span: 8 }} style={{ textAlign: 'center', verticalAlign: 'center' }}>
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
                                                    height: '15rem',
                                                    width: 'auto'
                                                }} />
                                        </Col>
                                        <Col>
                                            <img
                                                src={require(`${dino.dino_size_picture}`)}
                                                style={{
                                                    height: '15rem',
                                                    width: 'auto'
                                                }} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <ListGroup
                                        className="list-group-flush"
                                        style={{
                                            fontFamily: 'dinopia-r',
                                            fontSize: '1.5rem'
                                        }}>
                                        <ListGroup.Item>Type: {dino.type}</ListGroup.Item>
                                        <ListGroup.Item>Diet: {dino.period}</ListGroup.Item>
                                        <ListGroup.Item>Found in: {dino.found_in}</ListGroup.Item>
                                        <ListGroup.Item>Diet: {dino.Diet}</ListGroup.Item>
                                        <ListGroup.Item>Length: {dino.Length}</ListGroup.Item>
                                    </ListGroup>
                                </Col>

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
    if (dinoInfo.length === 0) {
        return (
            <Container style={{ textAlign: 'center' }}>
                <button className="button-d" style={{ margin: '2rem' }} onClick={() => navigate(-1)}> {'<'}Back </button>
                <div style={{ fontSize: '2.5rem', fontFamily: 'dinopia-l', textAlign: 'center' }}>
                    Sorry, the dinosaur you entered is invisible to the naked eye
                    <div>#dino 404 cry cry#</div>
                </div>
                <div style={{ fontFamily: 'dinopia-l', margin: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>*** To start another search, please use the <b style={{ fontFamily: 'dinopia-r' }}>'Back' button</b> to return to the previous page, or go back to <b>home</b>. ***</div>
            </Container>
        )
    }
    else return (
        <Container style={{ textAlign: 'center' }}>
                <button className="button-d" style={{ margin: '2rem' }} onClick={() => navigate(-1)}> {'<'}Back </button>
            {dinoDisplay}
            <div style={{ fontFamily: 'dinopia-l', margin: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>*** To start another search, please use the <b style={{ fontFamily: 'dinopia-r' }}>'Back' button</b> to return to the previous page, or go back to <b>home</b>. ***</div>
        </Container>
    );
}