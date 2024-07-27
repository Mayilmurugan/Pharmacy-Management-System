import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function Order(){
    const navigate = useNavigate();
    const {id} = useParams();
   // const [item_id, setid] = useState('');
        const [item_name, setname] = useState('');
        const [dosage, setdosage] = useState('');
        const [quantity, setquantity] = useState('');
        
    const handleSubmit = (e) =>{
        const handleInsert= async()=>{
            e.preventDefault();
            try {
              const res = await axios.post(`http://localhost:8081/order_data/` + id, {item_name, dosage, quantity});
           
              console.log({item_name, dosage, quantity})
            } catch (error) {
              console.error('Error posting data:', error);
            }
          }
          handleInsert();
         alert('Oredr placed click view to see datails')

    };

    return (
        <div class="pt-5">






            <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>


                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


                    {/* <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Id</label>
                        <input onChange={(e) => setid(e.target.value)} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div> */}
                    <div class="mb-5">
                                
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
                        <input type="text" onChange={(e) => setname(e.target.value)}id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dosage</label>
                        <input type="text" onChange={(e) => setdosage(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">quantity</label>
                        <input type="text" onChange={(e) => setquantity(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="flex justify-between">
                       
                        <div  >
                        <Link to="/vendor1">
                            <button
                        
                                className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                More
                            </button>
                            </Link>
                        </div>

                    
                            <div >
                                <button
                                    type="submit"
                                    ck={(e) => handleSubmit(e)}
                                    className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Place Order
                                </button>
                            </div>
                
                    </div>
                    <br></br>
                    <div class="flex justify-center">
            <Link to={`/final/${id}`}>
                            <button
                                className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                View
                            </button>
                            </Link>
                        </div>

                </a>










            </form>





        </div>
    );
}
export default Order;