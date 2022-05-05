import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InventoryCard.css';

const InventoryCard = ({ item, handleItemDetails }) => {
    const { itemName, balance, quantity, name, about, picture } = item;

    const navigate = useNavigate();
    const handleAddedNewItem = () =>{
        navigate('/additem')
    }
    return (

        <Col md={4}>
            <div className="singleItem px-3 pb-5 pt-3 mb-4 border">
                <img src={picture} alt="" />
                <div className='d-flex justify-content-between pt-4'>
                    <h6>Item Name : {itemName}</h6>
                    <h6>Price : {balance}</h6>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <h6>Quantity : {quantity}</h6>
                    <h6>Supplier : {name}</h6>
                </div>
                <h6 className='text-center'>{about.slice(0, 110)}</h6>
                <div className="allBtn">
                    <button className='btn icn' onClick={() => handleItemDetails(itemName)}>stock update</button>
                    <button className='btn hn' >delete</button>
                    <button className='btn hn' onClick={handleAddedNewItem}>add new item</button>
                </div>
            </div>

        </Col>

    );
};

export default InventoryCard;