import React, { useEffect, useState } from 'react';
import { addDurationToDb } from '../../utilities/fakedb';
import WholeCart from '../Cart/WholeCart/WholeCart';
import Accordian from '../Accordian/Accordian';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { toast } from 'react-toastify';
// import { Accordion } from 'react-bootstrap/Accordion';


const Home = () => {
    const [data, setData] = useState([])
    // const [exerciseData, setExerciseData] = useState([])
    const [exerciseTime, setExerciseTime] = useState( 0)
    const [breakTime, setBreakTime] = useState(0)


    useEffect(() => {
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setData(data))
    }, [])

    useEffect(() => {
      addDurationToDb(exerciseTime)
    }, [exerciseTime])
    
    const handleAddToList=(data)=>{
      setExerciseTime(exerciseTime + data.duration);
    } 
 
     
    const handleSecondClick=(e)=>{ 
      setBreakTime(e.target.getAttribute('second'))
      addSecondsToDb(e.target.getAttribute('second'))
      // addSecondsToDb(breakTime)
  }
  const notify = () => {
    toast("Wow!Exercise Compleated!");
    setExerciseTime(0);
    setBreakTime(0)
} 
    
    return (
      <>
       <div className='container' style={{ display:"flex" }}>
        <div className="row">
        <div className='col-9 row' >
          <h2 style={{ color:"white" }}>Select today's Exercise</h2>
          {
           data.map(data=><ExerciseCard 
            key={data._id} 
            data={data} 
            handleAddToList={handleAddToList} 
            ></ExerciseCard>)
          } 
         
       </div>
       
       <div className='col-3'>
          <WholeCart breakTime={breakTime} exerciseTime={exerciseTime} handleSecondClick={handleSecondClick} notify={notify}></WholeCart>
       </div>


       </div>
       
       </div>
       <div className="container">
       <Accordian></Accordian>
       </div>
       
       </>
    );
};

export default Home;