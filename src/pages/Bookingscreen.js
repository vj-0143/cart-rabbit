import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";



const Bookingscreen = (match) => {
  const [room,setRoom]= useState([]);
  const[loading,setloading]=useState(true)
  const[error,seterror]=useState()
  const user = JSON.parse(localStorage.getItem('currentUser'));
  


  const {roomid,fromdate,todate} = useParams()

  
  useEffect(()=>{
    const getData=async()=>{
      setloading(true)
      const data=( await axios.post('http://localhost:8000/api/rooms/getroombyid',{roomid:roomid})).data;
     
    //const obj={rooms:[{data}]}
    
    const array=Object.assign(data)
   // const flatNumbers = array.flat(); 
    setloading(false)
        console.log(array);
        setRoom(array);
     };
  
      getData();
    
   
    
    
   },[]);
  



  return (
    <div>
     {loading ?(<h1>loading</h1>):error ?(<h1>erroooor</h1>):(<div>


      <div className='row bs mr-2'>

        <div className='col-md-5 '>
<h3>
  {room.name}
</h3>
<img src={room.imageurls[0]} className='bigimg '></img>

        </div>
        <div className='col-md-5'>

       
        <div style={{float:'right'}}>
        <center><h1>booking details page</h1><hr/></center> 
         <h3>NAME:{user.name}</h3>
         <h3>CHECKINDATE:{fromdate}</h3>

        <h3>CHECKOUT DATE:{todate}</h3>
        <h3>maxcount:{room.maxcount}
        </h3>
          <h3>Amount</h3>
          <hr/>
          <h4>total days:</h4>
          <h4>rentperday:{room.rentperday}</h4>
          <h4>total amount:</h4>
          <div>
            <button className='btn btn-primary'>pay now</button>
          </div>
        </div>
        </div>

      </div>
     </div>)}
      
    </div>
  )
}

export default Bookingscreen
