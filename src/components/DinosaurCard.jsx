import React from 'react';
import Card from 'react-bootstrap/Card';
import Dino from './Dino.jpg'
// import ListGroup from 'react-bootstrap/ListGroup';

function DinosaurCard(props) {
    var dino = props.dino
    var name = dino.name
    var dis = dino.basic_info
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    style={{
                        height: '18rem',
                        width: '18rem'
                    }}
                    src={Dino} alt="image" />
                <Card.Header
                    as='h4'
                    style={{ fontFamily: 'dinopia-r' }}>
                    <span className='capital-letter'>
                        {name.slice(0, 1)}
                    </span>
                    {name.slice(1)}
                </Card.Header>
                <Card.Body>
                    <Card.Text
                        style={{ fontFamily: 'dinopia-l' }}>
                        {dis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DinosaurCard