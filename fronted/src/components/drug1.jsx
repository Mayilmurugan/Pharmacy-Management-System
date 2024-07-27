import React, { useState,useEffect } from "react";
import { Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Drug1(){  

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {

        try {
          const res = await axios.get('http://localhost:8081/get_data');
          if (JSON.stringify(res.data) !== JSON.stringify(data)) {
            setData(res.data.data);
            // console.log(res.data.data);
          }
        } catch (error) {
          console.error('Error fetching data on data change:', error);
        }
      };
      if (data) {
        fetchData();
      }
    }, [data]); 
    const remdata = async(id) =>{
        try {
          const response = await axios.post(`http://localhost:8081/remove/${id}`);
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
    return(
        <div className="sm:ml-64">

            <div class = "flex justify-center">
                
<h1 class="mb-4 mt-4 text-xl font-extrabold leading-none tracking-tight text-purple-700  dark:text-purple">Drug Details</h1>
  

            </div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <Table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Item id
                </th>
                <th scope="col" class="px-6 py-3">
                    Item name
                </th>
                <th scope="col" class="px-6 py-3">
                    Dosage
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Expire date
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
                <th scope="col" class="px-6 py-3">
                    Remove
                </th>
            </tr>
        </thead>
        <tbody>
        {
                        data.map( (item)=>{
                            return (
                            <tr key={item.item_id}>
                                <td>{item.item_id}</td>
                                <td>{item.item_name}</td>
                                <td>{item.dosage}</td>
                                <td>{item.rate}</td>
                                <td>{item.ex_date.slice(0,10)}</td>
                                <td>{item.stock}</td>
                                <td class="px-6 py-4">
                                <Link  to={`/edit1/${item.item_id}`} href="#" class="font-medium text-purple-600 dark:text-purple-500 hover:underline">Edit</Link>
                </td>
                                <td class="px-6 py-4">
                    <Link  onClick={() => remdata(item.item_id)} href="#" class="font-medium text-purple-600 dark:text-purple-500 hover:underline">Remove</Link> 
                </td>
                            </tr>
                            )

                        }
                    )
}
        </tbody>
    </Table>
</div>
<div class="pt-5 flex justify-center">
    <Link  to="/create1" ><button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
</Link>
</div>
        </div>
    )
}
export default Drug1;