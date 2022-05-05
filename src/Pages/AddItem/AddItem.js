import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddItem = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="itemname">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Product Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="price">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="text" placeholder="Product Price" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="quantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="text" placeholder="Quantity" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="supplier">
                                <Form.Label>Supplier</Form.Label>
                                <Form.Control type="text" placeholder="Supplier Name" />
                            </Form.Group>
                        </Row>


                        <Form.Group as={Col} controlId="img">
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control type="text" placeholder="Image Link" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>About Product</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>


                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddItem;