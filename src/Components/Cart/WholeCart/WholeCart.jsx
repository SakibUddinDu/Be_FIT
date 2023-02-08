import React, { useState } from 'react';
import { addSecondsToDb } from '../../../utilities/fakedb';
import Break from '../Break/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
// import { Toast } from 'react-bootstrap';


const WholeCart = ({exerciseTime, breakTime,handleSecondClick, notify } ) => {
  
    return (
        <div>
             {/* <Toast
          className="d-inline-block m-1"
        //   bg={variant.toLowerCase()}
        //   key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body >
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast> */}
            <PersonalInfo></PersonalInfo>
            <Break handleSecondClick={handleSecondClick} ></Break>
            <ExerciseDetails breakTime={breakTime} exerciseTime={exerciseTime} notify={notify}></ExerciseDetails>
            
        </div>
    );
};

export default WholeCart;