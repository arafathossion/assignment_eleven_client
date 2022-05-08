import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap';

const Blog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [lgShow, setLgShow] = useState(false);
    const [lgShows, setLgShows] = useState(false);
    const [lgShowe, setLgShowe] = useState(false);
    return (
        <Container className="mt-sm-5 mt-2">
            <Row>
                <h1 className='text-center my-md-5 my-2 pb-md-4 pb-2'>Our Blog</h1>
                <Col md={4}>
                    <Button onClick={() => setLgShow(true)}>
                        Difference between javascript and nodejs
                    </Button>

                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                            <Container>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Javascript</th>
                                                    <th>NodeJS</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                                    <td>NodeJS is a Javascript runtime environment.</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>It is basically used on the client-side.</td>
                                                    <td>It is mostly used on the server-side.</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                                                    <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Javascript is used in frontend development.</td>
                                                    <td>Nodejs is used in server-side development.</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                                                    <td>Nodejs is written in C, C++ and Javascript.</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>


                
                <Col md={4}>
                    <Button onClick={() => setLgShows(true)}>
                        Differences between sql and nosql databases.
                    </Button>

                    <Modal
                        size="lg"
                        show={lgShows}
                        onHide={() => setLgShows(false)}
                        aria-labelledby="example-modal-sizes-title-lga"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Container>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>SQL</th>
                                                    <th>NoSQL</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                                    <td>Non-relational or distributed database system.</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>These databases have fixed or static or predefined schema</td>
                                                    <td>They have dynamic schema</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Vertically Scalable</td>
                                                    <td>Horizontally scalable</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Follows ACID property</td>
                                                    <td>Follows CAP(consistency, availability, partition tolerance)</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>These databases are best suited for complex queries</td>
                                                    <td>These databases are not so good for complex queries</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </Col>


                                </Row>


                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>



                <Col md={4}>
                    <Button onClick={() => setLgShowe(true)}>
                        Differences between sql and nosql databases.
                    </Button>

                    <Modal
                        size="lg"
                        show={lgShowe}
                        onHide={() => setLgShowe(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                           <h5>What is JWT?</h5>
                           <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                           <h5>How JWT Works?</h5>
                           <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                           <h5>Why Use JWT?</h5>
                           <p>In short, JWTs are used as a secure way to authenticate users and share informatio</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;