import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

function playsound(soundfile){
    new Audio(soundfile).play()
}

export function Dinoinfo(props) {
  return (
    <Container classname = "dinosaur">
        <button style={{fontFamily: 'dinopia-r', margin: '0.5rem', fontSize: '1.5rem'}}
        className='button-d'
          onClick={()=>playsound(props.sound)}>
          {props.name}
        </button>
        <img src = {props.img} style={{borderRadius: '0.5rem'}}/>
    </Container>
  );
}

function DinoList(props) {
  return (
    <Container>
        <Row>
            
          {props.dino.map(c => (
            <Col md={3} style={{margin: '1rem 0 1rem 0', textAlign: 'center'}} key={c.id}>
              
              <Dinoinfo key={c.id} name={c.name} img={c.img} sound={c.sound} /> 
            </Col>
          ))} 

        </Row>
        </Container>
  );
}

export default DinoList;