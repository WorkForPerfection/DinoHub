import React from 'react';
// import './App.css';
import DinoList from './DinoList';
import { Dinodata } from './Dinodata';
import Allo from './assets/images/Allosaurusimg.jpg'
// import {Route, Routes, Link, useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

function DinoSounds() {
  return (
    <Card className="bg-dino" style={{margin: '2rem'}}>
      <Card.Header className="App-header">
        <img src={Allo} className="App-logo" style={{borderRadius: '1rem', margin: '2rem'}}/>
        <h1 style={{fontFamily: 'dino-font', margin: '5rem 0 0 0'}}>Welcome to our Dinoinfo Manager</h1>
      </Card.Header>
      <Container>
        <DinoList dino={Dinodata} />
      </Container>

    </Card>
  )
};

export default DinoSounds;