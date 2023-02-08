import React, { useState } from 'react';
import WholeCart from '../Cart/WholeCart/WholeCart';
import ExerciseCard from '../ExerciseCard/ExerciseCard';


const Home = () => {
const data=[
  {
    "_id": "63e1db3c07983dadd8cac09b",
    "name": "Ida",
    "picture": "https://i.postimg.cc/Fz9CYzrv/anastase-maragos-FP7cf-YPPUKM-unsplash.webp",
    "duration": 37,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3cd045d3d4548c691c",
    "name": "Juliet",
    "picture": "https://i.postimg.cc/MZDrh75p/ara-cho-m-zmf2-J063-Q-unsplash.webp",
    "duration": 35,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3c3447e07d1f7edb8b",
    "name": "Moss",
    "picture": "https://i.postimg.cc/yNcLncWB/Boxed-Water.png",
    "duration": 33,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3cd3d6973e616757a9",
    "name": "Pratt",
    "picture": "https://i.postimg.cc/NjWN1psp/dane-wetton-Ak-SJQnem75-Y-unsplash.webp",
    "duration": 29,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3c494e5857e0d1f2ac",
    "name": "Owen",
    "picture": "https://i.postimg.cc/8ctKMGc6/john-arano-h4i9-G-de7-Po-unsplash.jpg",
    "duration": 31,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3c79a93be48ebc1f1d",
    "name": "Horn",
    "picture": "https://i.postimg.cc/SQ2L0vMd/Screenshot-707.png",
    "duration": 21,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3c06cbe3ea6a768264",
    "name": "Goodman",
    "picture": "https://i.postimg.cc/c4L5ZvkM/Screenshot-705.png",
    "duration": 27,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3c918e7f56e90298a6",
    "name": "Mckay",
    "picture": "https://i.postimg.cc/KvppYmdX/Screenshot-707.png",
    "duration": 21,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  },
  {
    "_id": "63e1db3c7e9f68ae4e2b8e92",
    "name": "Herrera",
    "picture": "https://i.postimg.cc/MpcPMhSn/Screenshot-708.png",
    "duration": 37,
    "about": "Non non duis aute magna laborum duis eu est veniam minim laborum eu. Consequat aliqua eu commodo excepteur deserunt.\r\n"
  }
]
    const [exerciseData, setExerciseData] = useState([])
    const [exerciseTime, setExerciseTime] = useState(0)

    const handleAddToList=(data)=>{
      console.log(data);
      // console.log("clicked")
    }
 
    
    return (
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
          <WholeCart exerciseTime={exerciseTime}></WholeCart>
       </div>
       </div>
       </div>
    );
};

export default Home;