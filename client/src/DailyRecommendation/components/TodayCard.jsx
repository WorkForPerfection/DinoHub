import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


import Dino from './stego.jpeg';

import { MINT } from '../../css/colors'

const listStyle = { backgroundColor: 'rgba(255, 255, 255, 0.5)'}

function TodayCard(props) {
    var dino = props.dino.dinosaur
    var name = dino.name
    var dis = dino.basic_info
    var imgSrc = dino.dino_picture
    var image
    console.log(imgSrc)
    try {
        image = require('' + imgSrc)
    } catch (err) {
        image = require('' + './Dino.webp')
        console.log('this does not work')
        console.log(imgSrc)
        console.log('use this instead')
        console.log('./pictures/Giganotosaurus-dino.jpg')
    }
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
                            <Card.Text style={{ fontFamily: 'dinopia-r', fontSize: '5rem', margin: '2rem 0 0rem 0' }}>
                                <span className='capital-letter'>{name.slice(0, 1)}</span>
                                {name.slice(1)}
                            </Card.Text>
                        </Col>
                        <Col md={{ span: 3, offset: 0 }}>
                            <Card.Img
                                variant="top"
                                src={image}
                                style={{
                                    height: '20rem',
                                    width: 'auto',
                                    margin: '0 0 0 0'
                                }} />
                        </Col>
                        <Col>
                            <ListGroup
                                className="list-group-flush"
                                style={{
                                    fontFamily: 'dinopia-r',
                                    fontSize: '1.2rem',
                                    margin: '1rem 0 0rem 0',
                                }}>
                                <ListGroup.Item style={ listStyle }>Type: {dino.type}</ListGroup.Item>
                                <ListGroup.Item style={ listStyle }>Diet: {dino.period}</ListGroup.Item>
                                <ListGroup.Item style={ listStyle }>Found in: {dino.found_in}</ListGroup.Item>
                                <ListGroup.Item style={ listStyle }>Diet: {dino.Diet}</ListGroup.Item>
                                <ListGroup.Item style={ listStyle }>Length: {dino.Length}</ListGroup.Item>
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