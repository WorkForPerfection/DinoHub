import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


import Dino from './stego.jpeg';

import { MINT } from '../../css/colors'

function TodayCard(props) {
    var dino = props.dino.dinosaur
    var name = dino.name
    var dis = dino.basic_info
    console.log("fudsad")
    console.log(dino)
    return (
        <Card style={{
            width: '100%',
            height: '30%'
        }}>
            <Card.Header style={{ backgroundColor: MINT }}>
                <h3 style={{ fontFamily: 'dinopia-l', color: '#2C466C' }}>Dinosaur of the Day</h3>
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col style={{ textAlign: 'center', verticalAlign: 'center' }}>
                            <Card.Text style={{ fontFamily: 'dinopia-r', fontSize: '5rem' }}>
                                <span className='capital-letter'>{name.slice(0, 1)}</span>
                                {name.slice(1)}
                            </Card.Text>
                        </Col>
                        <Col md={{ span: 3, offset: 1 }}>
                            <Card.Img
                                variant="top"
                                src={Dino}
                                style={{
                                    height: '15rem',
                                    width: '15rem'
                                }} />
                        </Col>
                        <Col>
                            <ListGroup
                                className="list-group-flush"
                                style={{
                                    fontFamily: 'dinopia-r',
                                    fontSize: '1rem'
                                }}>
                                <ListGroup.Item>Type: {dino.type}</ListGroup.Item>
                                <ListGroup.Item>Diet: {dino.diet}</ListGroup.Item>
                                <ListGroup.Item>Found in: {dino.found_in}</ListGroup.Item>
                            </ListGroup>
                        </Col>

                    </Row>
                </Container>
            </Card.Body>
            <Card.Body>
                <Card.Text style={{ fontFamily: 'dinopia-l' }}>{dis}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default TodayCard;