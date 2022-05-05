import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AddItem = () => {
    return (
        <Container>
            <Row>
                <Col md={{span:6,offset:3}}>Add New Item</Col>
            </Row>
        </Container>
    );
};

export default AddItem;