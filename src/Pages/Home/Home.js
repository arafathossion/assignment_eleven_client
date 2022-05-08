import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InventoryCard from '../../Components/InventoryCard/InventoryCard';
import Newsletter from '../../Components/Newsletter/Newsletter';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState();
    useEffect(() => {
        fetch('https://still-fjord-04706.herokuapp.com/vegetableItems')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    const handleItemDetails = (_id) => {
        console.log('clicked', _id);
        navigate(`/inventory/${_id}`)
    }

    const handleManageInventories = () => {
        navigate(`/inventory`)
    }

    return (
        <Container fluid className='homePage'>
            <Row>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=600"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Raw cabbages are healthy & contain nutrients.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=600"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Dried dates should be avioded on renal diet.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1538159021332-8f28e9eca2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=600"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Eating raw spinach is good for relieve constipation.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>

            <Container>
                <Row>
                    <h1 className='text-center py-sm-5 py-2'>Our Products</h1>
                    {
                        items?.slice(0, 6).map(item => <InventoryCard key={item._id} item={item} handleItemDetails={() => handleItemDetails(item._id)}></InventoryCard>)
                    }


                    <Col md={{ span: 4, offset: 4 }}>
                        <button className='btn' onClick={handleManageInventories}>Manage Inventories</button>
                    </Col>

                    <h1 className='text-center py-sm-5 py-2'>Our Blog</h1>
                    <CardGroup>
                        <Card className='px-sm-3 px-0 border-0'>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1526346698789-22fd84314424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZ2V0YWJsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>Benefits of Cayenne pepper</Card.Title>
                                <Card.Text>
                                    Cayenne peppers are fantastic sources of antioxidants and other plant compounds that protect our cells and promote health
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className='px-sm-3 px-0 border-0'>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1615485291234-9d694218aeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHZlZ2V0YWJsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>Benefits of cauliflower</Card.Title>
                                <Card.Text>
                                    Cauliflower is a heart-friendly vegetable thanks to a plant compound called sulforaphane
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className='px-sm-3 px-0 border-0'>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1614690738055-33507a488f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZlZ2V0YWJsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>Benefits of Cabbage</Card.Title>
                                <Card.Text>
                                    Cabbage, especially red cabbage, seems to raise levels of beta-carotene, lutein, and other heart-protective antioxidants
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>




<Newsletter></Newsletter>



        </Container>
    );
};

export default Home;