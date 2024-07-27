import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function Edit1(){
    const {id} = useParams();
    const [item_name, setname] = useState('');
    const [dosage, setdosage] = useState('');
    const [stock, setstock] = useState('');
    const [rate, setrate] = useState('');
    const [ex_date, setdate] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8081/edit/' + id)
            .then(res => {
             //   console.log(res.data);
                const { item_name, dosage, stock, rate, ex_date } = res.data.data[0];
                // console.log(res.item_name.data)
                setname(item_name);
                setdosage(dosage);
                setstock(stock);
                setrate(rate);
                setdate(ex_date);
            })
            .catch(err => console.log(err));
    }, [id]);

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/edited/' + id, {item_name, dosage, rate, ex_date, stock})
        .then(res => {
            console.log(res.data)
            if(res.data.updated){
                navigate('/drug1')
            }
            else{
                alert("not updated");
            }
        })

        
    }
    return(
 <div class="pt-5">






<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>


    <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


        {/* <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Id</label>
            <input    value={item_name} onChange={(e) => setFormData({ ...formData, item_id: e.target.value })} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div> */}
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
            <input   value={item_name} type="text"  onChange={(e) => setname(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dosage</label>
            <input   value={dosage} type="text"  onChange={(e) => setdosage(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input value={rate} type="text" onChange={(e) => setrate(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry Date</label>
            <input   value={ex_date}  type="text"  onChange={(e) => setdate(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
            <input  value={stock}  onChange={(e) => setstock(e.target.value)} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>

        <div class="flex justify-between">
        <div >
                <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Update
                </button>
            </div>

            <Link to="/drug1">
                <div >
                    <button
                        type="submit"

                        className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Cancel
                    </button>
                </div>
            </Link>
        </div>

    </a>










</form>




        </div>
    );
}
export default Edit1;