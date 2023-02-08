import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ExerciseCard = (props) => {
// console.log(props)
// const handleAddToList=(data)=>{
//   console.log(data);
//   // console.log("clicked")
// }
  const {_id, picture, name, about, duration}=props.data;
  // const {handleAddToList} = props;
  //   console.log(handleAddToList)
    return (
      <div className="col-md-4 gy-2">
        <div className='p-3'>
          <Card className="mt-3" style={{ width: '16rem', height:"95%" }}>
          <Card.Img style={{ width: '16rem', height:'10rem' }} variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Duration: {duration}
            </Card.Text>
            <Card.Text>
              {about}
            </Card.Text>
            <Button onClick={()=>props.handleAddToList(props.data)} className="btn btn-success col-12" variant="primary">Select</Button>
            {/* <Button onClick={handleAddToList}  className="btn btn-success col-12" variant="primary">Select</Button> */}
          </Card.Body>
        </Card>
        </div>
    
    </div>
    )
}
export default ExerciseCard;