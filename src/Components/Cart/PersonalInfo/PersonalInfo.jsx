import React from 'react';
import { Card } from 'react-bootstrap';

const PersonalInfo = () => {
    return (

        <div className='d-flex'>
            <img  style={{ width:'75%'}} src="https://i.postimg.cc/5ykYkvBn/sakib.png" alt="" />
           <div className='col-12 mt-5'>
            <h5>Sakib Uddin</h5>
            <p>Kabi Jasim Uddin Hall, DU</p>
           </div>
        </div>
    );
};

export default PersonalInfo;