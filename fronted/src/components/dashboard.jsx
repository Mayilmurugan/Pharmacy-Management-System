import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import Pharmacists from "../assets/pharmacicts.svg";
import {TriangleAlert } from "lucide-react"
import {Pill} from "lucide-react"
import axios from 'axios';
import {UserRound} from "lucide-react"

function Dash() {

  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8081/count');
               const newData = res.data. totalCount;
               console.log(newData)
               console.log(res.data.datalowStockCount);

            //    Only update state if the fetched data is different from the current state
                if (JSON.stringify(newData) !== JSON.stringify(data)) {
                    setData(newData);
                    setData1(res.data.lowStockCount);
                    setData2(res.data.totalsuppliers);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
   // console.log(data);
  return (
    <section className="sm:ml-64">
      <div>
        <div className="bg-purple-100 rounded-2xl lg:flex sm:flex-column gap-x-14 mt-10 p-4 items-center z-0">
          <img className="h-48 rounded-lg" src={Pharmacists} alt="#" />
          <div>
            <p className="opacity-80 lg:text-4xl text-2xl font-bold text-indigo-700 z-10">
            You medical people will have more lives to answer for in the other world than even we generals. ...
            </p>
          
          </div>
        </div>

       <div className="flex gap-10 m-10 justify-center">
       <div className="flex flex-col items-center justify-center border-solid border-2 border-purple-300 rounded-md w-49 h-60 p-5">
        <h1 className="font-bold text-2xl">Total Medicines</h1>
        <h1 className="font-bold text-2xl">{data}</h1>
        <br></br>
               <Pill color="red" size={32} />
        </div>
       
        <div className="flex flex-col items-center justify-center border-solid border-2 border-purple-300 rounded-md w-49 h-60 p-5">
        <h1 className="font-bold text-2xl">lowStockCount</h1>
             <h1 className="font-bold text-2xl">{data1}</h1> 
             <br></br>
             
               <TriangleAlert color="red" size={32}/>
        </div>

        <div className="flex flex-col items-center justify-center border-solid border-2 border-purple-300 rounded-md w-49 h-60 p-5">
        <h1 className="font-bold text-2xl">Total supplier</h1>
             <h1 className="font-bold text-2xl">{data2}</h1> 
             <br></br>
             <UserRound color="red" size={32}/>
        </div>

        
       </div>
      </div>



    </section>
  )
}
export default Dash