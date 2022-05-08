import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={12}>
                    <img src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?t=st=1651818051~exp=1651818651~hmac=385bee1975fa2405bb7fb923c18e8713f696c0367f8ed748448e15efbbeea618&w=996" alt="" className='w-75 d-block m-auto' />
                   
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;