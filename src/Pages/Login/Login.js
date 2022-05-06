import React, { useState } from 'react';
import { Col, Container, Row, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [key, setKey] = useState('singIn');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [
        signInWithEmailAndPassword,
        singInUser,
        singInLoading,
        singInError,
      ] = useSignInWithEmailAndPassword(auth);



    const handleSingUp = (e) =>{
         e.preventDefault();
         const name = e.target.name.value;
         const email = e.target.email.value;
         const password = e.target.password.value;
         createUserWithEmailAndPassword( email, password)
         console.log(name,email,password)
    }

    if(user || singInUser){
    navigate('/home')
    }




    const handleSingIn = (e) =>{
         e.preventDefault();
         const singInEmail = e.target.email.value;
         const singInPassword = e.target.password.value;
         signInWithEmailAndPassword(singInEmail, singInPassword)
         console.log(singInEmail,singInPassword)
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
                        </Tab>


                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;