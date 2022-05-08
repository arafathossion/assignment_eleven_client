import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <Container>
        <Row>
        <h1 className='text-center py-sm-5 py-2'>Newsletter</h1>
            <Col lg={4}>
                <div className='newsletter-info'>

                    <h3>Subscribe to Newsletters</h3>
                    <p>And stay informed about our news and events</p>
                </div>
            </Col>
            <Col lg={8}>
                <Form>
                    <Row>
                        <Col lg={5}>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col lg={5}>
                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col lg={2} className='d-flex align-items-center'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>





                </Form>
            </Col>
        </Row>

    </Container>
    );
};

export default Newsletter;