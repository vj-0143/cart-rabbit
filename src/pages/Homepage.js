import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import Room from '../components/Room';
import moment from 'moment'

//import Room from '../components/Room'
import { DatePicker} from 'antd';
import Item from 'antd/es/list/Item';


const {RangePicker}=DatePicker;



function Homepage() {

  const [rooms,setRooms]= useState([]);
  const[loading,setloading]=useState()
  const[error,seterror]=useState()
  const[fromdate,setfromdate]=useState([])
  const[todate,settodate]=useState([])

  console.log(fromdate)
  console.log(todate)
 
 useEffect(()=>{
  const getData=async()=>{
    setloading(true)
    const data=( await axios.get('http://localhost:8000/api/rooms/getallrooms')).data;
   
  //const obj={rooms:[{data}]}
  
  const array=Object.values(data)
  const flatNumbers = array.flat(); 
  setloading(false)
      console.log(flatNumbers);
      setRooms(flatNumbers);
   };

    getData();
  
 
  
  
 },[]);
 function filterByDate(dates){
 
  setfromdate(moment(dates[0].$d).format('DD-MM-YYYY'))
  settodate(moment(dates[1].$d).format('DD-MM-YYYY'))

 }
 

  return (
    <div className='background'>
      <div className='row mt-5'>
        <div className='col-md-9 container-fluid'>
          <RangePicker onChange={filterByDate}/>

        </div>
      </div>

    <div className='col-md-9 container-fluid'>
    {loading ? (<h1>loading.....</h1>):error? (<h1>error</h1>):(rooms.map(room=>{
      return<div className='col-md-12 mt-2'>
        <Room room={room} fromdate={fromdate} todate={todate}/>
      </div>;
     }))}
     
    </div>
     
    </div>

    
       
     
  )
  
}

export default Homepage
