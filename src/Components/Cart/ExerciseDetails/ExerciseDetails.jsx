import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = ({exerciseTime, breakTime, notify}) => {
   
  
    return (
        <>
        <div className='mt-5'>
          
           <h5>Exercise Details</h5> 
           <p>Exercise Time: <span>{exerciseTime}</span></p>
           <p>Break Time: <span>{breakTime}</span></p>
        </div>
        {/* <Button onClick={()=>handleToast(true)} className='col-12'>Complete Exercise</Button> */}
        <Button onClick={notify} className='col-12'>Complete Exercise</Button>
        <ToastContainer />
        </>
      
    );
};

export default ExerciseDetails;