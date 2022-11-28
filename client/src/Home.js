import styles from './general.module.css'
import Abel from "./pictures/Abelisaurus-dino.jpg"
import Diplo from "./pictures/Diplodocus-dino.jpg"
import Allo from "./pictures/Allosaurus-dino.jpg"
import React from "react";

import Container from 'react-bootstrap/Container'
import Logo from './components/Logo'
import './css/Dino.css'
import { MINT, NAVY, ORG } from "./css/colors"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

// const cardStyle1 = { margin: '0.8rem', color: ORG, backgroundColor: MINT }
const cardStyle2 = { margin: '0.8rem', color: NAVY, fontFamily: 'dinopia-l', fontSize: '1.2rem', backgroundColor: MINT }

export function Home() {
    return (
        <div className='bg-dino' >
            <Container >
                <h1 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    padding: '2rem 0rem 0rem 0rem',
                    fontFamily: 'dino-font'
                }}>
                    Welcome to
                </h1>
                <Container style={{ textAlign: 'center', margin: '2rem' }} >
                    <Logo size={11} color1={NAVY} />
                </Container>

                {/* In addition, you can try out some of our custom features, including: */}
                <h1 style={{ fontSize: '2rem', fontFamily: 'dinopia-L', color: NAVY, textAlign: 'center' }}>Dedicated to Fellow Dino Fans</h1>
                <h1 style={{ fontFamily: 'dinopia-r', color: NAVY, textAlign: 'center' }}>\/{'      '}\/{'      '}\/</h1>
                <Row>
                    <Col>
                        <Card style={cardStyle2}>
                            <Card.Header>This is a place where dinosaur lovers can learn and share dinosaur facts, build your own customized dino-fossil, and even hatch your own dinosaur egg!</Card.Header>
                            <Card.Body style={{ backgroundColor: 'transparent' }}>
                                In addition, you can try out some of our custom features, including:
                                <ListGroup>
                                    <ListGroup.Item>
                                        To begin, sign up / log in to your DinoHub account. Then, you can search for a particular dinosaur's name in the search bar, or use the 'explore' functionality to browse through all dinosaurs in our database in various sorting methods.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        the "daily recommendation" which tells you about a random dinosaur's facts every day, and see previous dinos of the day;
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        the "build your own dino" feature, which allows you to create your own dinosaur skeleton from pieces of skeletons from existing dinosaurs;
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        and the "hatch dino egg" feature, where you can get a random dinosaur's egg which will be hatched in a period of 6 days. After the egg hatches, you will be able to see your dinosaur in your "park"; you can even name your dino! (can keep up to 10 dinos for each account)
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col style={{ fontSize: '3rem', fontFamily: 'dinopia-o' }} md={5}>
                        <Card style={{ margin: '0.8rem', color: ORG, backgroundColor: MINT }}>
                            <Card.Header>
                                <span style={{ fontFamily: 'dino-font' }}>Learn</span>
                                {' '}and{' '}<span style={{ fontFamily: 'dino-font' }}>Share</span>{' '}dinosaur facts
                            </Card.Header>
                        </Card>
                        <Card style={{ margin: '0.6rem', color: ORG, backgroundColor: MINT }}>
                            <Card.Header><span style={{ fontFamily: 'dino-font' }}>Build</span> your own customized dino-fossil</Card.Header>
                        </Card>
                        <Card style={{ margin: '0.8rem', color: ORG, backgroundColor: MINT }}>
                            <Card.Header><span style={{ fontFamily: 'dino-font' }}>Hatch</span> your own dinosaur egg!</Card.Header>
                        </Card>

                    </Col>

                </Row>
                <Row style={{ fontSize: '2rem', fontFamily: 'dinopia-l', margin: '2rem' }}>
                    Below are some pictures of dinosaurs in our database -- can you guess their names?
                </Row>

                <img src={Abel} alt={"Abel"} />
                <img src={Diplo} alt={"Diplo"} />
                <img src={Allo} alt={"Allo"} />
            </Container>
        </div>
    );
}