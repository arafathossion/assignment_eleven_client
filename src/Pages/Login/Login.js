import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    // const [user] = useAuthState(auth);
    const [key, setKey] = useState('singIn');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        users,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        singInUser,
        singInLoading,
        singInError,
    ] = useSignInWithEmailAndPassword(auth);



    const handleSingUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
       

    }

    const [signInWithGoogle, googlesingInuser, googlesingInloading, googlesingInerror] = useSignInWithGoogle(auth);



    // const [token] = useToken(user);
    
    if (users || singInUser || googlesingInuser) {
        navigate(from, { replace: true });
    }


    if (googlesingInerror) {
        console.log(googlesingInerror?.message)
    }



    const handleSingIn = async (e) => {
        e.preventDefault();
        const singInEmail = e.target.email.value;
        const singInPassword = e.target.password.value;
        await signInWithEmailAndPassword(singInEmail, singInPassword)
        console.log(singInEmail, singInPassword)
        //  const url = `https://still-fjord-04706.herokuapp.com/login`;
        const { data } = await axios.post('https://still-fjord-04706.herokuapp.com/login', { singInEmail });
                localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
   


    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className='haldaForm'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="singUp" title="Sing Up">
                            <h6>Sing Up</h6>
                            <Form onSubmit={handleSingUp}>
                                <Form.Group className="mb-3" controlId="singupname">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="User Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="singupemail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="singuppassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="singupcheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="singIn" title="Sing In">
                            <Form onSubmit={handleSingIn}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <button onClick={() => signInWithGoogle()}>Sign In</button>
                        </Tab>


                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;