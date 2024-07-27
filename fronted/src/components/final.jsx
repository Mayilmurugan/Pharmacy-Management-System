import React, { useState, useEffect  } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import axios from 'axios';
function Final(){

    const [data, setData] = useState([]);
    const {id} = useParams();
    const [search,setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8081/final_data/'+ id);
                const newData = res.data.data;
                console.log(res.data.data)
  
                // Only update state if the fetched data is different from the current state
                if (JSON.stringify(newData) !== JSON.stringify(data)) {
                    setData(newData);
                    //setTotalRate(res.data.data1)
                    //setTotalQnt(res.data.data2)
                    //console.log(res.data.data2);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
  
        fetchData(data);
    }, []); // Empty dependency array to run only on mount
    console.log()
    return(
        <div className="pt-5">


      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

        <form class="max-w-md mx-auto">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" onChange={(e) => setSearch(e.target.value)} id="default-search" class="block w-full p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Medicine" required />
            
          </div>
        </form>
        <br />





        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Dosage
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {
 data.filter((item) => {
  return search.toLowerCase() === "" ? item : item.item_name.toLowerCase().includes(search);
}
).map((item) => {
                return (
                  <tr key={item.supplier_id}  >
                    {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">{item.supplier_id}</th> */}
                    <td class="px-6 py-4">{item.item_name}</td>
                    <td class="px-6 py-4">{item.dosage}</td>
                    <td class="px-6 py-4">{item.quantity}</td>


                    {/* <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.dosage}</td> */}
                 {/* //   <td class="px-6 py-4">{item.}</td> */}

                  </tr>
                )

              }
              
            )
         
        }
          </tbody>
        </table>
      </div>
      <div class=" pt-5 flex justify-center" >
        <Link to = '/vendor1'>
        <button
          type="submit"
          onClick={(e) => handleclick(e)}
          className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        </Link>
      </div>

    </div>
    )
}
export default Final;