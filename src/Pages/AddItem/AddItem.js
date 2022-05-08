import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleAddItem = (e) => {
        e.preventDefault();
        const itemName = e.target.itemName.value;
        const balance = e.target.balance.value;
        const quantity = e.target.quantity.value;
        const picture = e.target.picture.value;
        const name = e.target.name.value;
        const about = e.target.about.value;
        const email = user?.email;
        const addItem = { itemName, balance, quantity, picture, name, about, email }
        const url = `https://still-fjord-04706.herokuapp.com/additem`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        console.log(addItem)
    }
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleAddItem}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="itemname">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" name='itemName' placeholder="Product Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="price">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="text" name="balance" placeholder="Product Price" />
                            </Form.Group>
                        </Row>

                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email Adderss</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" value={user?.email} readOnly />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="quantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="text" name="quantity" placeholder="Quantity" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="supplier">
                                <Form.Label>Supplier</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Supplier Name" />
                            </Form.Group>
                        </Row>


                        <Form.Group as={Col} controlId="img">
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control type="text" name="picture" placeholder="Image Link" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>About Product</Form.Label>
                            <Form.Control as="textarea" name="about" rows={3} />
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