import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import './SingleInventory.css'

const SingleInventory = () => {
    const { id } = useParams();
    console.log(id)
    const [loadSingleItem, setLoadSingleItem] = useState();


    useEffect(() => {
        const url = `https://still-fjord-04706.herokuapp.com/vegetableItem/${id}`
        fetch(url)
            .then(response => response.json())
            .then(json => setLoadSingleItem(json))
    }, [id])
    console.log(loadSingleItem)
    // console.log(some)


    const some = loadSingleItem?.quantity;

    console.log(some);
    const [reduceQuantity, setReduceQuantity] = useState(loadSingleItem?.quantity)
    const handleQuantity = () => {
        const someReduce = parseInt(some) - 1;
        setReduceQuantity(someReduce.toString())
        console.log(reduceQuantity);
        const pain = { reduceQuantity };
        const url = `https://still-fjord-04706.herokuapp.com/quantity/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pain)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    const [a, seta] = useState(10);
    const numberRef = useRef(0)
    const handleRestock = (e) => {
        e.preventDefault()
        const email = numberRef.current.value;
        seta(parseInt(email))
        const change = a + 1;

        console.log("nice", change)
    }



    return (

        <Container>
            <Row className='d-flex align-items-center'>
                <Col md={7}>


                    <img src={loadSingleItem?.picture} alt="" />



                </Col>
                <Col md={5}>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <h6>Item Name : {loadSingleItem?.itemName}</h6>
                            <h6>Price : {loadSingleItem?.balance}</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Quantity : {loadSingleItem?.quantity}</h6>
                            <h6>Supplier : {loadSingleItem?.name}</h6>
                        </div>
                        <p>{loadSingleItem?.about}</p>
                        <button className='btn fw-bolder' onClick={handleQuantity}>Delivered</button>
                        <>
                            {/* <form onSubmit={handleRestock}>
                                <input type="number" ref={numberRef} value={a + 1}/>
                                <button className='btn fw-bolder'>Restock</button>
                            </form> */}
                        </>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default SingleInventory;