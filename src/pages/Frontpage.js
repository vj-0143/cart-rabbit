import React from 'react'
import { Link } from 'react-router-dom'
import img from '../image/cartrabbit.png'

function Frontpage() {
  return (
    <div className='row landing'>
        <div className='col-md-12 text-center'>

            <h1 className='texth'>RabbitRooms</h1>
            <h3>rabbitrooms very beatiful</h3>
            <Link to="/home">
            <button className='btn btn-primary'> Get Start</button><br/>
            </Link>
            <img src={img} alt="React Image" />
        </div>
        
      
    </div>
  )
}

export default Frontpage
