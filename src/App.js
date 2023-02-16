import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import Register from './pages/Register';
import Loginpage from './pages/Loginpage';
//import Homescreen from './pages/Homescreen';
import Homepage from './pages/Homepage';
import Bookingscreen from './pages/Bookingscreen';
import Adminpage from './pages/Adminpage';
import Frontpage from './pages/Frontpage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
       
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/book/:roomid/:fromdate/:todate' element={<Bookingscreen/>}/>
        <Route path='/admin' element={<Adminpage/>}/>
        <Route path ='/' element={<Frontpage/>}/>


      </Routes>  
      </BrowserRouter>
    
     
      
    </div>
  );
}

export default App;
