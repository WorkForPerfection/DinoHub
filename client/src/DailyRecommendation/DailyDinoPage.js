import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DailyCard from './components/DailyCard'
import TodayCard from './components/TodayCard'

import '../css/Dino.css';
import { Button } from 'react-bootstrap';

import http from './services/dino'
import axios from 'axios';
import dino from './services/dino';

const NAVY = '#2C466C'

async function getDailyDinos() {
    var data = (await http.getToday()).data.data
    return data
    // console.log('getting')
    // http.getToday().then(res => {
    //     const data = res.data.data;
    //     if (res.status === 200) {
    //         console.log('got')
    //         console.log(data)
    //         return data
    //     }
    // })

}

// function DailyDinoPage() {
//     return getDailyDinos()
// }

function DailyDinoPage() {
    // var [dailydinos, setDinos] = useState(null)
    // useEffect(() => {
    //     getDailyDinos().then((res) => {
    //         obj = res
    //         console.log("huhhhu")
    //         console.log(obj)
    //     })
    // }, [])

    // var obj = getDailyDinos()

    var [dailyIndex, setIndex] = useState(0)
    useEffect(() => {
        console.log("effffffect")
    })

    var obj = [{ "id": 1, "date": "2022-11-10T08:00:00.000Z", "dinosaur_id": 1, "dinosaur": { "id": 1, "type": "Papapa", "name": "Tyranysf", "period": "Okenham", "found_in": "USA", "length": "8.0m", "diet": "Herbivour", "dino_picture": null, "dino_size_picture": null, "basic_info": "The motley crew of wizards and witches at Hogwarts taught us about life, love, acceptance, friendship, death, and bravery from our book shelves and on the big screen, leaving us dozens of quotes and moments that still hold up to this day. ", "detailed_description": "There will be no foolish wand-waving or silly incantations in this class. As such, I don't expect many of you to appreciate the subtle science and exact art that is potion-making. However, for those select few who possess the predisposition, I can teach you how to bewitch the mind and ensnare the senses. I can tell you how to bottle fame, brew glory, and even put a stopper in death. Then again, maybe some of you have come to Hogwarts in possession of abilities so formidable that you feel confident enough to not pay attention!", "liked_count": 0 } }, { "id": 2, "date": "2022-11-23T08:00:00.000Z", "dinosaur_id": 2, "dinosaur": { "id": 2, "type": "pior", "name": "Ddaumous", "period": "Autum", "found_in": "Canada", "length": "16.0m", "diet": "Carnivourous", "dino_picture": null, "dino_size_picture": null, "basic_info": "If there is one thing Voldemort cannot understand, it is love. He didn't realize that love as powerful as your mother's for you leaves its own mark. Not a scar, no visible sign… to have been loved so deeply, even though the person who loved us is gone, will give us some protection forever. It is in your very own skin.", "detailed_description": "Being our first introduction to the wizarding world and its beloved cast of characters, it’s no surprise that some of the most memorable Harry Potter sayings come from Sorcerer’s Stone. While it has an inviting, almost storybook-like vibe, the first installment of Harry’s magical journey imparts some deep lessons — the importance of friendship, the value of humility (even if you’re The Boy Who Lived), the dangers of excessive desire, and sometimes, that it’s necessary to break the rules.", "liked_count": 0 } }]


    function decIndex() {
        var alt = dailyIndex - 1

        console.log('index to: ' + alt)
        if (alt > -1 && alt < obj.length) {

            console.log('index to: ' + alt)
            setIndex(alt)
        }
    }

    function incIndex() {
        var alt = dailyIndex + 1

        console.log('index to: ' + alt)
        if (alt > -1 && alt < obj.length) {
            console.log('index to: ' + alt)
            setIndex(alt)
        }
    }

    var dailydinos = obj
    console.log("here")
    console.log(obj)
    // console.log(dailydinos[0])
    var dinotoday = dailydinos[dailyIndex]
    dailydinos.splice(dailyIndex, 1)
    var today = new Date(dinotoday.date)
    return (
        <div className='bg-page'>
            <Container>
                <div style={{ margin: '2rem 0rem 0rem 0rem' }}>
                    <div style={{ padding: "0rem 10rem 0rem 10rem" }}>
                        <h1 style={{
                            fontFamily: "dinopia-r",
                            color: 'white',
                            backgroundColor: NAVY,
                            textAlign: 'center',
                            fontSize: '3.5rem',
                            // margin: '0rem 23rem 0rem 23rem'
                        }}>
                            <span className='capital-letter'>T</span>
                            <span style={{ fontSize: '4.2rem' }}>HE</span>
                            <span style={{ fontSize: '4.2rem' }}> D</span>
                            <span className='capital-letter'>A</span>
                            <span style={{ fontSize: '4.2rem' }}>IL</span>
                            <span className='capital-letter'>Y d</span>
                            <span style={{ fontSize: '4.2rem' }}>IN</span>
                            <span className='capital-letter'>O</span>
                        </h1>
                    </div>
                    <Container>
                        <Row>
                            <Col md='1'>
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: NAVY,
                                        borderColor: 'transparent'
                                    }}
                                    md={{ span: 4 }}
                                    onClick={decIndex()}>
                                    <span style={{
                                        fontFamily: 'dinopia-r',
                                        fontSize: '5rem'
                                    }}>
                                        {'<'}
                                    </span>
                                </Button>
                            </Col>
                            <Col>
                                <h3 style={{
                                    fontFamily: "dinopia-l",
                                    textAlign: 'center',
                                    padding: '0.3rem',
                                    color: '#2C466C',
                                    letterSpacing: '0.11rem'
                                }}>
                                    {today.toLocaleString('en-US', { weekday: 'long' })},
                                    {' '}{today.toLocaleString('en-US', { month: 'long' })}
                                    {' '}{today.getDate()}, {today.getFullYear()}
                                </h3>
                            </Col>
                            <Col md='1'>
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: NAVY,
                                        borderColor: 'transparent'
                                    }}
                                    md={{ span: 4 }}
                                    onClick={incIndex()}>
                                    <span style={{
                                        fontFamily: 'dinopia-r',
                                        fontSize: '5rem'
                                    }}>{'>'}
                                    </span>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <TodayCard dino={dinotoday} />
                <Row xs="auto"
                    md="auto"
                    className="g-4"
                    style={{
                        alignItems: 'center',
                        padding: '1rem 0 0 0'
                    }}>
                    {dailydinos.map((dailydino) => (
                        <Col key={dailydino.id}>
                            <DailyCard day={dailydino} style={{ alignItems: 'top' }} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )

}

export default DailyDinoPage;