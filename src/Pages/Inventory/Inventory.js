import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import InventoryCard from '../../Components/InventoryCard/InventoryCard';

const Inventory = () => {
    const [items, setItems] = useState();
    useEffect(() => {
        fetch('https://still-fjord-04706.herokuapp.com/vegetableItems')
            .then(response => response.json())
            .then(data => setItems(data));
    }, [])
    // console.log(items?._id,items)
    return (
        <Container>
            <Row>
                {
                    items?.map(item => <InventoryCard key={item._id} item={item}></InventoryCard>)
                }
            </Row>
        </Container>
    );
};

export default Inventory;