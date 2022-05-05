import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InventoryCard from '../../Components/InventoryCard/InventoryCard';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    const handleItemDetails = (itemName) =>{
            console.log('clicked',itemName);
            navigate(`/inventory/:${itemName}`)
    }

    const handleManageInventories = () =>{
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
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>

           <Container>
           <Row>
                {
                    items?.slice(0, 6).map(item => <InventoryCard item={item} handleItemDetails={handleItemDetails}></InventoryCard>)
                }
                <Col md={{span:4,offset:4}}>
                    <button className='btn' onClick={handleManageInventories}>Manage Inventories</button>
                </Col>
            </Row>
           </Container>








        </Container>
    );
};

export default Home;