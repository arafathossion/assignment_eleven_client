import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import InventoryCard from '../../Components/InventoryCard/InventoryCard';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyItems] = useState([])
    useEffect(() => {


        const myAllItems = async () => {
            const email = user?.email;
            const url = `https://still-fjord-04706.herokuapp.com/myitems?email=${email}`;
            fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setMyItems(data))
        }
        myAllItems();
    }, [user?.email])
    // const newPain = myitems[0];
    console.log(typeof myitems, myitems)

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




    return (
        <Container>
            <h1>My Items</h1>

            <Row className='myPainItem'>
                {
                    myitems?.map(myitem => <InventoryCard key={myitem._id} item={myitem} handleDeleteMyItem={handleDeleteMyItem}></InventoryCard>)
                    // Object?.entries(newPain)?.map(myitem=> <InventoryCard key={myitem._id} item={myitem} handleDeleteMyItem={handleDeleteMyItem}></InventoryCard>)
                }
            </Row>
        </Container>
    );
};

export default MyItems;