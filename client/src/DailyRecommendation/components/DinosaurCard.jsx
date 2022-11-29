import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function DinosaurCard(props) {
    var dino = props.dino
    var name = dino.name
    var dis = dino.basic_info
    var imgSrc = dino.dino_picture
    var image
    // console.log(typeof (image))
    try {
        image = require('' + imgSrc)
    } catch (err) {
        image = require('' + './Dino.webp')
        console.log('this does not work')
        console.log(imgSrc)
        console.log('use this instead')
        console.log('./pictures/Giganotosaurus-dino.jpg')
    }
    // imgSrc='./pictures/stego.jpeg'

    return (
        <div>
            <Card style={{ width: '17rem' }}>
                <Card.Img
                    variant="top"
                    style={{
                        height: 'auto',
                        width: '16rem'
                    }}
                    src={image}
                    alt="image" />
                <Card.Header
                    as='h4'
                    style={{ fontFamily: 'dinopia-r' }}>
                    <span className='capital-letter'>
                        {name.slice(0, 1)}
                    </span>
                    {name.slice(1)}
                </Card.Header>
                <ListGroup
                    className="list-group-flush"
                    style={{
                        fontFamily: 'dinopia-r',
                        fontSize: '1rem'
                    }}>
                    <ListGroup.Item>Type: {dino.type}</ListGroup.Item>
                    <ListGroup.Item>Diet: {dino.period}</ListGroup.Item>
                    <ListGroup.Item>Found in: {dino.found_in}</ListGroup.Item>
                    <ListGroup.Item>Diet: {dino.Diet}</ListGroup.Item>
                    <ListGroup.Item>Length: {dino.Length}</ListGroup.Item>
                </ListGroup>
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