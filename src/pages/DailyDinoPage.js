import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DailyCard from '../components/DailyCard'

function DailyDinoPage() {
    return(
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                    <DailyCard />
                </Col>
            ))}
        </Row>
    )
}

export default DailyDinoPage;