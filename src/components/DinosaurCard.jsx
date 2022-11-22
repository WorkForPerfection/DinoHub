import React from 'react';
import Card from 'react-bootstrap/Card';
import Dino from './Dino.jpg'
// import ListGroup from 'react-bootstrap/ListGroup';

function DinosaurCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" style={{ height: '18rem' }} src={Dino} alt="image" />
                <Card.Header as='h4'>T-rex</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Harry felt happier for the rest of the
                        weekend than he had done all term. He and Ron spent much 
                        of Sunday catching up with all their homework again.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DinosaurCard