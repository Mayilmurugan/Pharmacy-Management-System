import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Create from './components/create';
import Create2 from './components/create2';
import Edit from './components/edit';
import Dash from './components/dashboard';
import Bill from './components/billings';
import Choose from './components/choose';
import Total from './components/total';
import Vendor from './components/vendor';
import Order from './components/order';
import Home1 from './components/home1';
import Drug1 from './components/drug1';
import Create1 from './components/create1';
import Edit1 from './components/edit1';
import Choose1 from './components/choose1';
import Vendor1 from './components/vendor1';
import Prescription from './components/prescription';
import Detail from './components/detail';
import Final from './components/final';
import Help from './components/help'
// import Login from './components/login';
// import Signup from './components/signup';
import { ToastContainer } from 'react-bootstrap';

function App(){
  const [billId,setBillId] = useState(1000);
  return (
  <>
  <div className='main'>
     
        <div className='div1'> 
        <div className = "App">
          {/* <Home1/> */}
          <Router>
            <Routes>
            <Route path = "/" element={<Home1/>} >
            <Route path = "/dashboard" element={<Dash/>} />
            <Route path = "/drug1" element={<Drug1/>}/> 
            <Route path = "/billings" element={<Bill/>} /> 
            <Route path= "/help" element = {<Help/>} /> 
            <Route path= "/vendor1" element = {<Vendor1/>} /> 

            <Route path= "/prescription" element = {<Prescription/>} />

              </Route>
             
            
           
          
              <Route path = "/home" element={<Home/>} />
              <Route path = "/create" element={<Create/>} />
              <Route path = "/edit/:id" element={<Edit/>} />
              
              <Route path = "/choose" element={<Choose billId={billId} setBillId={setBillId}/>} />
              <Route path = "/total/:id" element={<Total/>}/>
              <Route path = "/vendor" element={<Vendor/>}/>
              <Route path = "/order/:id" element={<Order/>}/>
             
              <Route path = "/create1" element={<Create1/>} />
              <Route path = "/create2" element={<Create2/>} />
              <Route path = "/edit1/:id" element={<Edit1/>} />
              <Route path = "/choose1" element={<Choose1 billId={billId} setBillId={setBillId}/>} />
             
             
              <Route path = "/final/:id" element={<Final/>} />
              <Route path = "/detail/:id" element={<Detail/>} />
              {/* <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>} /> */}
            


            </Routes>
          </Router>
        </div>
      </div>
  </div>
    
  </>
    
  )
}

export default App;
