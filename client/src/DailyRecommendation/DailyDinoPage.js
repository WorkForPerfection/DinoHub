import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DailyCard from './components/DailyCard'
import TodayCard from './components/TodayCard'

import '../css/Dino.css';
import { Button } from 'react-bootstrap';

import axios from 'axios';

const NAVY = '#2C466C'

function DailyDinoPage() {
    var [dailyIndex, setIndex] = useState(0)
    var [obj, setObj] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/dino/today").then(
            (response) => {
                console.log("getting")
                setObj(response.data)
            }
        ).catch() 
    }, [])

    if (obj.length > 4) {
        var dailydinos = obj
        var dinotoday = dailydinos[dailyIndex]
        var otherdinos = dailydinos.map((day) => day)

        var indexStart = dailyIndex
        var indexEnd = dailyIndex + 4
        otherdinos.splice(dailyIndex, 1)
        otherdinos = otherdinos.slice(indexStart, indexEnd).reverse()
        console.log(otherdinos)
        var today = new Date(dinotoday.date)

        const num = obj.length
        console.log(num)
        // var obj = [{"id":3,"date":"2022-11-28T08:00:00.000Z","dinosaur_id":11,"dinosaur":{"id":11,"type":"armoured dinosaur","name":"Ankylosaurus","period":"Late Cretaceous","dino_picture":"./pictures/Ankylosaurus-dino.jpg","dino_size_picture":"./pictures/Ankylosaurus-size.jpg","found_in":"Canada, USA","Diet":"herbivorous","Length":"7.0m","Likes":null}},{"id":4,"date":"2022-11-27T08:00:00.000Z","dinosaur_id":14,"dinosaur":{"id":14,"type":"large theropod","name":"Carnotaurus","period":"Late Cretaceous","dino_picture":"./pictures/Carnotaurus-dino.jpg","dino_size_picture":"./pictures/Carnotaurus-size.jpg","found_in":"Argentina","Diet":"carnivorous","Length":"7.6m","Likes":null}},{"id":5,"date":"2022-11-26T08:00:00.000Z","dinosaur_id":15,"dinosaur":{"id":15,"type":"large theropod","name":"Giganotosaurus","period":"Early Cretaceous","dino_picture":"./pictures/Giganotosaurus-dino.jpg","dino_size_picture":"./pictures/Giganotosaurus-size.jpg","found_in":"Argentina","Diet":"carnivorous","Length":"12.5m","Likes":null}},{"id":6,"date":"2022-11-25T08:00:00.000Z","dinosaur_id":16,"dinosaur":{"id":16,"type":"large theropod","name":"Allosaurus","period":"Late Jurassic","dino_picture":"./pictures/Allosaurus-dino.jpg","dino_size_picture":"./pictures/Allosaurus-size.jpg","found_in":"Portugal, USA","Diet":"carnivorous","Length":"12.0m","Likes":null}},{"id":7,"date":"2022-11-24T08:00:00.000Z","dinosaur_id":17,"dinosaur":{"id":17,"type":"small theropod","name":"Velociraptor","period":"Late Cretaceous","dino_picture":"./pictures/Velociraptor-dino.jpg","dino_size_picture":"./pictures/Velociraptor-size.jpg","found_in":"Mongolia","Diet":"carnivorous","Length":"1.8m","Likes":null}}]

        function decIndex() {
            var alt = dailyIndex - 1
            console.log('index to: ' + alt)
            if (alt > -1 && alt < num) {
                console.log('index to: ' + alt)
                if (dailyIndex < indexStart) {
                    indexStart = dailyIndex
                    indexEnd = indexStart + 4
                }
                setIndex(alt)
            }
        }
        function incIndex() {
            var alt = dailyIndex + 1
            console.log('index to: ' + alt)
            if (alt > -1 && alt < num) {
                // console.log('index to: ' + alt)
                if (dailyIndex > indexEnd) {
                    indexEnd = dailyIndex
                    indexStart = indexEnd - 4
                }
                setIndex(alt)
            }
        }

        return (
            <div className='bg-page'>
                <Container>
                    <div>
                        <div style={{ padding: "0rem 20rem 0rem 20rem" }}>
                            <h1 style={{
                                fontFamily: "dinopia-r",
                                color: 'white',
                                backgroundColor: NAVY,
                                textAlign: 'center',
                                fontSize: '3.5rem',
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
                            <Row className="justify-content-md-center">
                                <Col md='auto' style={{ margin: '0', padding: '0' }}>
                                    <Button
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: NAVY,
                                            borderColor: 'transparent',
                                            margin: '0',
                                            padding: '0'
                                        }}
                                        onClick={() => incIndex()}>
                                        <span style={{
                                            fontFamily: 'dinopia-r',
                                            fontSize: '3rem',
                                            margin: '0rem',
                                            padding: '0rem'
                                        }}>
                                            {'<'}
                                        </span>
                                    </Button>
                                </Col>
                                <Col md='auto'>
                                    <h3 style={{
                                        fontFamily: "dinopia-l",
                                        textAlign: 'center',
                                        padding: '1rem 0.3rem 0.3rem 0.3rem',
                                        color: '#2C466C',
                                        letterSpacing: '0.11rem',
                                        width: '30rem'
                                    }}>
                                        {today.toLocaleString('en-US', { weekday: 'long' })},
                                        {' '}{today.toLocaleString('en-US', { month: 'long' })}
                                        {' '}{today.getDate()}, {today.getFullYear()}
                                    </h3>
                                </Col>
                                <Col md='auto' style={{ margin: '0', padding: '0' }}>
                                    <Button
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: NAVY,
                                            borderColor: 'transparent',
                                            margin: '0',
                                            padding: '0'
                                        }}
                                        onClick={() => decIndex()}>
                                        <span style={{
                                            fontFamily: 'dinopia-r',
                                            fontSize: '3rem',
                                            margin: '0rem',
                                            padding: '0rem'
                                        }}>{'>'}
                                        </span>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <TodayCard dino={dinotoday} />
                    <h1 style={{ fontFamily: 'dinopia-l', fontSize: '2rem', textAlign: 'center', margin: '1rem', color: NAVY }} >Previous Daily Dinos</h1>
                    <Row xs="auto"
                        md="auto"
                        className="g-3 justify-content-md-center"
                        style={{
                            alignItems: 'center',
                            padding: '1rem 0 0 0'
                        }}>
                        {otherdinos.map((dailydino) => (
                            <Col key={dailydino.id} style={{ margin: '0 auto auto auto' }}>
                                <DailyCard day={dailydino} style={{ alignItems: 'top' }} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
    else {
        <Container style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: "dinopia-r", fontSize: '1rem' }}>Looks like a Meteoroid hit the Daily Dinos Database</h1>
            <h1 style={{ fontFamily: "dinopia-r", fontSize: '1rem' }}>#Dino 404 Cry Cry#</h1>
        </Container>
    }

}

export default DailyDinoPage;