import React ,{useState}from 'react'
import{Modal,Button,Carousel } from'react-bootstrap'
import {Link} from 'react-router-dom';

function Room({room}) {
  const [show, setShow] = useState(false);
  const[fromdate,setfromdate]=useState()
  const[todate,settodate]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div className='row bs'>
     
     <div className='row-6'>
      <div className='col-sm-7'>
        <img src={room.imageurls[0]} className='smallimg'></img>
         </div>
      <div className='row-6'>
        <b><h3>{room.name}</h3>
        <p>rentperday:{room.rentperday}</p>
        <p>maxcount:{room.maxcount}</p>
        <p>phone Number:{room.phonenumber}</p>
        <p>description:{room.description}</p>
        <p>type:{room.type}</p></b>
      </div>
      <div>
      <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
      <button className='btn btn-primary m-2'>book now</button>
      </Link >
      <button className='btn btn-primary' onClick={handleShow}>view details</button>
      </div>
     
     </div>
    

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Carousel>
      {room.imageurls.map(url=>{
        return <Carousel.Item>
        <img
          className="d-block w-100 bigimg"
          src={url}
          alt="First slide"
        />
        
      </Carousel.Item>
      })}
     
      
    </Carousel>
    <p>{room.description}</p>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default Room
