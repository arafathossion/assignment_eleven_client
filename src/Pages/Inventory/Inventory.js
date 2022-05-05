import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import InventoryCard from '../../Components/InventoryCard/InventoryCard';

const Inventory = () => {
    const [items,setItems] = useState();
    useEffect(() =>{
        fetch('data.json')
        .then(response => response.json())
        .then(data => setItems(data));
    },[])
    console.log(items)
    return (
        <Container>
            <Row>
                   {
                       items?.map(item => <InventoryCard item={item}></InventoryCard>)
                   }
            </Row>
        </Container>
    );
};

export default Inventory;