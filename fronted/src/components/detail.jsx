import React, { useState,useEffect } from "react";
import { Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
function Detail(){

    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8081/detail_data/' + id);
                const newData = res.data.data;
                console.log(res.data.data)
  
                // Only update state if the fetched data is different from the current state
                if (JSON.stringify(newData) !== JSON.stringify(data)) {
                    setData(newData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
  
        fetchData();
    }, []); // Empty dependency array to run only on mount
    return(
        <div>

        <div class = "flex justify-center">
            
    <h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-purple-700  dark:text-purple">Prescription</h1>
    
    
        </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
              Item id
            </th>
            <th scope="col" class="px-6 py-3">
                Item name
            </th>
            <th scope="col" class="px-6 py-3">
                Quantity number
            </th>
            <th scope="col" class="px-6 py-3">
                order
            </th>
        </tr>
    </thead>
    <tbody>
    {
                    data.map( (item)=>{
                        return (
                        <tr key={item.item_id}>
                            <td class="px-3 py-3">{item.item_id}</td>
                            <td class="px-3 py-3">{item.bitem_name}</td>
                            <td class="px-3 py-3">{item.quantity}</td>
                            <td class="px-3 py-3">{item.rate}</td>
                           
                        </tr>
                        )
    
                    }
                )
    }
    
    </tbody>
    </table>
    </div>
    <div class="pt-5 flex justify-center">
    <Link  to="/prescription" ><button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
    </Link>
    </div>
    </div>
    )
}
export default Detail;