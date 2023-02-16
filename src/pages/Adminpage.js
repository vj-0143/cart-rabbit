import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TabPane } from 'react-bootstrap'
import { Tabs } from 'antd';

function Adminpage() {
    useEffect(() => {
        if (! JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
            window.location.href = "/home"
        }
    }, [])
    return (
        <div className='mt-3 ml-3 mr-3 bs'>
            <h1>ADMIN PAGE</h1>
            <Tabs defaultActiveKey='1' >
                <TabPane tab="bookings" key="1">
                    <h1> Bookings</h1>        </TabPane>
                <TabPane tab="rooms" key="2">
                    <Rooms />
                </TabPane>
                <TabPane tab="add Room" key="3">
                    <AddRoom />
                </TabPane>
                <TabPane tab="all users" key="4">
                    <Users />
                </TabPane>
            </Tabs>

        </div>
    )
}

export default Adminpage;


export function Rooms() {
    const [rooms, setrooms] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = (await axios.get('http://localhost:8000/api/rooms/getallrooms')).data;

            //const obj={rooms:[{data}]}

            const array = Object.values(data)
            const flatNumbers = array.flat();
            console.log(flatNumbers);
            setrooms(flatNumbers);
        };

        getData();




    }, []);


    return (
        <div className='row'>
            <div className='col-md-10'>
                <h1>Rooms</h1>
                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Room id</th>
                            <th>name</th>
                            <th>type </th>
                            <th>rentperday</th>
                            <th>max count</th>
                            <th>phone number</th>


                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length && (rooms.map(room => {
                            return <tr>
                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}</td>
                                <td>{room.maxcount}</td>
                                <td>{room.phonenumber}</td>

                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export function Users() {
    const [users, setusers] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = (await axios.get('http://localhost:8000/api/users/getallusers')).data;

            //const obj={rooms:[{data}]}
            console.log((data))

            setusers((data));
        };

        getData();




    }, []);
    return (

        <div className='row'>
            <div className='col-md-10'>
                <h1>Users</h1>
                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>userid</th>
                            <th>name</th>
                            <th>email </th>
                            <th>isAdmin</th>



                        </tr>
                    </thead>
                    <tbody>
                        {users.length && (users.map(user => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'yes' : 'no'}</td>


                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )



}
export function AddRoom() {
    const [name, setname] = useState("")
    const [rentperday, setrentperday] = useState()
    const [maxcount, setmaxcount] = useState()
    const [description, setdescription] = useState()
    const [phonenumber, setphonenumber] = useState()
    const [type, settype] = useState()
    const [imageurl1, setimageur1] = useState()
    const [imageurl2, setimageurl2] = useState()
    const [imageurl3, setimageurl3] = useState()


    async function addRoom() {
        const newroom = {
            name,
            rentperday,
            maxcount,
            description,
            phonenumber,
            type,
            imageurls: [imageurl1, imageurl2, imageurl3]
        }
        try {
            const result = (await axios.post('/api/rooms/addroom', newroom)).data
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>ADDROOM</h1>
            <div className='row'>
                <div className='col-md-5'>

                    Nmae:    <input type='text' className='form-control' placeholder='room name'
                        value={name} onChange={(e) => { setname(e.target.value) }} />

                    RentPerDay<input type='text' className='form-control' placeholder='rentperday' value={rentperday} onChange={(e) => { setrentperday(e.target.value) }} />
                    MaxCount<input type='text' className='form-control' placeholder='maxcount' value={maxcount} onChange={(e) => { setmaxcount(e.target.value) }} />
                    Description <input type='text' className='form-control' placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    PhoneNumber  <input type='text' className='form-control' placeholder='phone number' value={phonenumber} onChange={(e) => { setphonenumber(e.target.value) }} />
                    Type  <input type='text' className='form-control' placeholder='type' value={type} onChange={(e) => { settype(e.target.value) }} />
                    Images  <input type='text' className='form-control' placeholder='image 1' value={imageurl1} onChange={(e) => { setimageur1(e.target.value) }} />
                    <input type='text' className='form-control' placeholder='image 2' value={imageurl2} onChange={(e) => { setimageurl2(e.target.value) }} />
                    <input type='text' className='form-control' placeholder='image 3' value={imageurl3} onChange={(e) => { setimageurl3(e.target.value) }} />

                    <button className='btn btn-primary mt-2' onClick={addRoom}> addroom</button>



                </div>


            </div>

        </div>
    )
}
