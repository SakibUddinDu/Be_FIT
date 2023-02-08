import React from 'react';

const ExerciseDetails = ({exerciseTime, breakTime}) => {
    return (
        <div>
           <h5>Exercise Details</h5> 
           <p>Exercise Time: <span>{exerciseTime}</span></p>
           <p>Break Time: <span>{breakTime}</span></p>
        </div>
    );
};

export default ExerciseDetails;