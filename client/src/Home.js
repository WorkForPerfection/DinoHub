import styles from './general.module.css'
import Abel from "./pictures/Abelisaurus-dino.jpg"
import Diplo from "./pictures/Diplodocus-dino.jpg"
import Allo from "./pictures/Allosaurus-dino.jpg"
import React from "react";

import Container from 'react-bootstrap/Container'
import Logo from './components/Logo'
import './css/Dino.css'
import { MINT, NAVY } from "./css/colors"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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
                <Container style={{ textAlign: 'center' }} >
                    <Logo size={10} color1={NAVY} shadow={'0.6rem 0.6rem 0.05rem #000000'} />
                </Container>

                In addition, you can try out some of our custom features, including:
                <Row style={{ fontFamily: 'dinopia-r' }}>
                    <Col style={{ fontSize: '2rem' }} md={{ padding: '' }}>
                        <Card>
                            <span style={{ fontFamily: 'dino-font' }}>Learn</span> and <span style={{ fontFamily: 'dino-font' }}>Share</span>  dinosaur facts
                        </Card>
                        <Card>
                            <span style={{ fontFamily: 'dino-font' }}>Build</span> your own customized dino-fossil
                        </Card>
                        <Card>
                            <span style={{ fontFamily: 'dino-font' }}>Hatch</span> your own dinosaur egg!
                        </Card>
                        This is a place where dinosaur lovers can learn and share dinosaur facts, build your own customized dino-fossil, and even hatch your own dinosaur egg!
                        To begin, sign up / log in to your DinoHub account. Then, you can search for a particular dinosaur's name in the search bar, or use the 'explore' functionality to browse through all dinosaurs in our database in various sorting methods.
                    </Col>
                    <Col>
                        <Row>
                            the "daily recommendation" which tells you about a random dinosaur's facts every day;
                        </Row>
                        <Row>
                            the 'build your own dino' feature, which allows you to create your own dinosaur skeleton from pieces of skeletons from existing dinosaurs;
                        </Row>
                        <Row>
                            and the 'hatch dino egg' feature, where you can get a random dinosaur's egg which will be hatched in a period of 6 days. After the egg hatches, you will be able to see your dinosaur in your "park"; you can even name your dino! (can keep up to 10 dinos for each account)
                        </Row>
                    </Col>
                </Row>
                <p style={{ fontSize: '20px' }}>
                    Below are some pictures of dinosaurs in our database -- can you guess their names?
                </p>

                <img src={Abel} alt={"Abel"} />
                <img src={Diplo} alt={"Diplo"} />
                <img src={Allo} alt={"Allo"} />
            </Container>
        </div>
    );
}