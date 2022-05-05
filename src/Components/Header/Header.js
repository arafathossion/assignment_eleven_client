import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Row>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to='/home'>React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                                <Nav.Link as={NavLink} to='/inventory'>Inventory</Nav.Link>
                                {/* <Nav.Link as={NavLink} to='/inventory'>Inventory</Nav.Link> */}
                                
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
};

export default Header;