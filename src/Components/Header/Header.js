import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
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
                               
                                {
                                    user && 
                                    <>
                                     <Nav.Link as={NavLink} to='/inventory'>Manage inventory</Nav.Link>
                                    <Nav.Link as={NavLink} to='/myitems'>My Items</Nav.Link>
                                    <Nav.Link as={NavLink} to='/additem'>Add Item</Nav.Link>
                                    </>
                                }
                                {
                                    user? <button className='btn' onClick={() => {
                                        signOut(auth);
                                      }}>sing Out</button>: <Nav.Link as={NavLink} to='/login'>Sing Up / Sing In</Nav.Link>
                                }
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