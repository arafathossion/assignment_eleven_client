import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    // const [user] = useAuthState(auth);
    const [key, setKey] = useState('signIn');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        users,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);



    const handlesignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)


    }

    const [signInWithGoogle, googlesignInuser, googlesignInloading, googlesignInerror] = useSignInWithGoogle(auth);



    // const [token] = useToken(user);

    if (users || signInUser || googlesignInuser) {
        navigate(from, { replace: true });
    }

    if(loading || signInLoading){
        return <Loading></Loading>
      }



    let errorElemetn;
    if (googlesignInerror || signInError) {
        errorElemetn = <p>Error: {googlesignInerror?.message} {signInError?.message}</p>
    }




    const handlesignIn = async (e) => {
        e.preventDefault();
        const signInEmail = e.target.email.value;
        const signInPassword = e.target.password.value;
        await signInWithEmailAndPassword(signInEmail, signInPassword)
        console.log(signInEmail, signInPassword)
        //  const url = `https://still-fjord-04706.herokuapp.com/login`;
        const { data } = await axios.post('https://still-fjord-04706.herokuapp.com/login', { signInEmail });
        localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, { replace: true });
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
                        <Tab eventKey="signUp" title="Sign Up">
                            <h6>sign Up</h6>
                            <Form onSubmit={handlesignUp}>
                                <Form.Group className="mb-3" controlId="signupname">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="User Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="signupemail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="signuppassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="signupcheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </Tab>
                        <Tab eventKey="signIn" title="Sign In">
                            <Form onSubmit={handlesignIn}>
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
                            <h5 className="text-danger pt-md-3 pt-1">{errorElemetn}</h5>
                            <button onClick={() => signInWithGoogle()}>Sign In</button>
                        </Tab>


                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;