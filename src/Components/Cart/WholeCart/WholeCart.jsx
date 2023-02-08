import React, { useState } from 'react';
import Break from '../Break/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const WholeCart = ({exerciseTime} ) => {
    const [breakTime, setBreakTime] = useState(0)
   
    const handleSecondClick=(e)=>{ 
        setBreakTime(e.target.getAttribute('second'))
    }
    return (
        <div>
            <PersonalInfo></PersonalInfo>
            <Break handleSecondClick={handleSecondClick} ></Break>
            <ExerciseDetails breakTime={breakTime} exerciseTime={exerciseTime}></ExerciseDetails>
        </div>
    );
};

export default WholeCart;