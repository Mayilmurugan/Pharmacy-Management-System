import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import Pharmacists from "../assets/pharmacicts.svg";
import axios from 'axios';
function Bill(){
   const [customer_name, setCustomerName] = useState('');
   const handleInputChange = (e) => {
      const value = e.target.value;
      setCustomerName(value);
      console.log(customer_name);
      window.sessionStorage.setItem('customer_name', JSON.stringify(value));
  };
  // window.sessionStorage.setItem('customer_name',JSON.stringify(value));
    return(
      <div className=" sm:ml-64 bg-purple-100 rounded-2xl lg:flex sm:flex-column gap-x-14 mt-10 p-4 items-center z-0">
          <img className="h-48 rounded-lg" src={Pharmacists} alt="#" />
          <div>
            <p className="opacity-80 lg:text-4xl text-2xl font-bold text-indigo-700 z-10">
              Never worry about your Inventory
            </p>
<br></br>
           
            <input type="text"  onChange={handleInputChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           <br></br>
            <Link to="/choose1">
              <button className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create a Bill
              </button>
            </Link>
          </div>
        </div>
      //  <div>
      //    <div>
      //       <h2>BIlling Section</h2>
      //    </div>
      //    <div>
      //    <Form className="d-grid gap-2" style={{ margin: "5rem" }} >
      //           <Form.Group className="mb-3" controlId="customer_name">
      //               <Form.Control
      //                   onChange={handleInputChange}
      //                   type="text"
      //                   placeholder="Enter customer"
      //                   required
      //               />
      //           </Form.Group>
      //           </Form>
                
      //    </div>
      //           <Link className="d-grid gap-2" style={{ "text-docoration":"none"}} to="/">
      //           <Button variant = "success" size="lg">back</Button>
      //           </Link> 
      //           <br></br>
      //           <Link className="d-grid gap-2" style={{ "text-docoration":"none"}} to="/choose1">
      //           <Button variant = "success" size="lg">Create Bill</Button>
      //           </Link> 
      //  </div>
      // window.sessionStorage.setItem('customer_name',JSON.stringify(value));
    )
   // window.sessionStorage.setItem('customer_name',JSON.stringify(value));
}
export default Bill