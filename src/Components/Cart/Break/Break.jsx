import React from 'react';
import { Button } from 'react-bootstrap';

const Break = ({handleSecondClick}) => {

    const seconds=[10, 20, 30,40,50]
  
    return (
        <div>
            <h3>Add a Break</h3>
            {
              seconds.map(second=><Button key={second} onClick={handleSecondClick} className='g-2' second={second}>{second}</Button>)  
            }
        </div>
    );
};

export default Break;