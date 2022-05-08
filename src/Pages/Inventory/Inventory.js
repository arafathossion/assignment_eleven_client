import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import InventoryCard from '../../Components/InventoryCard/InventoryCard';

const Inventory = () => {
    const [myitems, setMyItems] = useState([])
    const [items, setItems] = useState();
    useEffect(() => {
        fetch('https://still-fjord-04706.herokuapp.com/vegetableItems')
            .then(response => response.json())
            .then(data => setItems(data));
    }, [])

    const handleDeleteMyItem = (id) => {
        const proceed = window.confirm("Are you sure?")
        if (proceed) {

            console.log("Clicked Id", id);
            const url = `https://still-fjord-04706.herokuapp.com/delete/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myitems.filter(myitem => myitem._id !== id);
                    setMyItems(remaining)
                })
        }
    }
    // console.log(items?._id,items)
    return (
        <Container>
            <Row>
                {
                    items?.map(item => <InventoryCard key={item._id} handleDeleteMyItem={handleDeleteMyItem} item={item}></InventoryCard>)
                }
            </Row>
        </Container>
    );
};

export default Inventory;