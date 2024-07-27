import React, { useState, useEffect  } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import axios from 'axios';

function Total() {
  const [totalRate, setTotalRate] = useState(null);
  const [totalQnt, setTotalQnt] = useState(null);
  const [data, setData] = useState([]);
  const {id} = useParams();
  const initialCustomerName = JSON.parse(window.sessionStorage.getItem('customer_name')) || '';
  const [customer_name, setCustomerName] = useState(initialCustomerName);
  const navigate = useNavigate();
  //console.log(id);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get('http://localhost:8081/total_data/'+ id);
              const newData = res.data.data;
              console.log(res.data.data)

              // Only update state if the fetched data is different from the current state
              if (JSON.stringify(newData) !== JSON.stringify(data)) {
                  setData(newData);
                  setTotalRate(res.data.data1)
                  setTotalQnt(res.data.data2)
                  console.log(res.data.data2);
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []); // Empty dependency array to run only on mount
  console.log(data);
  const handleclick = (e) => {
    alert('proceed to print');
    navigate("/billings");
  };
  return (
    <div> 
<div class = "flex justify-center"><button
                        type="submit"

                        className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {customer_name}
                    </button></div>
                    <br></br>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs  uppercase bg-gray-100  text-purple-700  dark:text-purple">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
        {
                        data.map((item)=>{
                            return (
                            <tr>
                              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.item_name}</td>
                              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.qnt}</td>
                              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.rate}</td>
                            
                                
                            </tr>
                            )

                        }
                    )
}
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">{totalQnt}</td>
                <td class="px-6 py-3">{totalRate}</td>
            </tr>
        </tfoot>
    </table>
    <div class=" pt-5 flex justify-center" >
        <button
          type="submit"
          onClick={(e) => handleclick(e)}
          className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Print
        </button>
      </div>
</div>

    </div>
  )
}

export default Total;