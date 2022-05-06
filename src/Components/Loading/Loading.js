import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:"90vh"}}>
            <Spinner animation="grow" variant="danger" />
        </div>
    );
};

export default Loading;