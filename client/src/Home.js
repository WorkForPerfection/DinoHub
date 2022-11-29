import { React, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container'
import Logo from './components/Logo'
import './css/Dino.css'
import { MINT, NAVY, ORG } from "./css/colors"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// const cardStyle1 = { margin: '0.8rem', color: ORG, backgroundColor: MINT }
const cardStyle2 = { margin: '0.8rem', color: NAVY, fontFamily: 'dinopia-l', fontSize: '1.3rem', backgroundColor: MINT }

var dino_list = [
    'Tyrannosaurus',
    'Mamenchisaurus',
    'Stegosaurus',
    'Bactrosaurus',
    'Dilophosaurus',
    'Carnotaurus',
    'Aragosaurus',
    'Ankylosaurus',
    'Allosaurus',
    'Triceratops',
]

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}


export function Home() {
    var [shuf_dino, setDino] = useState(dino_list)
    useEffect(() =>
        setDino(shuffle(shuf_dino))
    )
    var shuf_dino = shuffle(shuf_dino)
    var dinoImg1 = './pictures/' + shuf_dino[0] + '-dino.jpg'
    var dinoImg2 = './pictures/' + shuf_dino[1] + '-dino.jpg'
    var dinoImg3 = './pictures/' + shuf_dino[2] + '-dino.jpg'
    console.log(dinoImg1, dinoImg2, dinoImg3)

    function handleRefresh() {
        shuf_dino = shuffle(shuf_dino)
        setDino(shuf_dino)
    }

    return (
        <Container fluid>
            <div className='bg-dino' >
                <h1 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    padding: '2rem 0rem 0rem 0rem',
                    fontFamily: 'dino-font'
                }}>
                    Welcome to
                </h1>
                <Container style={{ textAlign: 'center', margin: '2rem' }}>
                    <Logo size={11} color1={NAVY} />
                    <h1 style={{ fontSize: '2rem', fontFamily: 'dinopia-L', color: NAVY, textAlign: 'center' }}>Dedicated to Fellow Dino Fans</h1>
                    <h1 style={{ fontFamily: 'dinopia-r', color: NAVY, textAlign: 'center' }}>\/{'      '}\/{'      '}\/</h1>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col>
                        <Card style={cardStyle2}>
                            <Card.Header style={{ padding: '1rem' }}>This is a place where dinosaur lovers can learn and share dinosaur facts, build your own customized dino-fossil, and even hatch your own dinosaur egg!</Card.Header>
                            <Card.Body style={{ padding: '1rem' }}>
                                In addition, you can try out some of our custom features, including:
                                <ListGroup style={{ padding: '1rem 0 0 0' }}>
                                    <ListGroup.Item style={{ color: MINT, backgroundColor: NAVY }}>
                                        To begin, sign up / log in to your DinoHub account. Then, you can search for a particular dinosaur's name in the search bar, or use the 'explore' functionality to browse through all dinosaurs in our database in various sorting methods.
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ color: MINT, backgroundColor: NAVY }}>
                                        the "daily recommendation" which tells you about a random dinosaur's facts every day, and see previous dinos of the day;
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ color: MINT, backgroundColor: NAVY }}>
                                        the "build your own dino" feature, which allows you to create your own dinosaur skeleton from pieces of skeletons from existing dinosaurs;
                                    </ListGroup.Item >
                                    <ListGroup.Item style={{ color: MINT, backgroundColor: NAVY }}>
                                        and the "hatch dino egg" feature, where you can get a random dinosaur's egg which will be hatched in a period of 6 days. After the egg hatches, you will be able to see your dinosaur in your "park"; you can even name your dino! (can keep up to 10 dinos for each account)
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ fontSize: '3rem', fontFamily: 'dinopia-o' }} md={5}>
                        <Card style={{ margin: '0.8rem', color: ORG, backgroundColor: MINT }}>
                            <Card.Header style={{ padding: '1rem' }}>
                                <span style={{ fontFamily: 'dino-font' }}>Learn</span>
                                {' '}and{' '}<span style={{ fontFamily: 'dino-font' }}>Share</span>{' '}dinosaur facts
                            </Card.Header>
                        </Card>
                        <Card style={{ margin: '0.6rem', color: ORG, backgroundColor: MINT }}>
                            <Card.Header style={{ padding: '1rem' }}><span style={{ fontFamily: 'dino-font' }}>Build</span> your own customized dino-fossil</Card.Header>
                        </Card>
                        <Card style={{ margin: '0.8rem', color: ORG, backgroundColor: MINT }}>
                            <Card.Header style={{ padding: '1rem' }}><span style={{ fontFamily: 'dino-font' }}>Hatch</span> your own dinosaur egg!</Card.Header>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container style={{ alignText: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '1.5rem', fontFamily: 'dinopia-l', margin: '2rem' }}>
                    Below are 3 pictures of random dinosaurs from a small part our database -- can you guess their names?
                    {/* <Button className='button-d' onClick={() => handleRefresh()}>Refresh</Button> */}
                </div>
                <img src={require('' + dinoImg1)} alt={"dino1"} />
                <img src={require('' + dinoImg2)} alt={"dino2"} />
                <img src={require('' + dinoImg3)} alt={"dino3"} />
            </Container>
        </Container>
    );
}