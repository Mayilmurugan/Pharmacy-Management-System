import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import axios from 'axios';
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
function Create1() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        item_id: '',
        item_name: '',
        dosage: '',
        rate: '',
        ex_date: '',
        stock: '',

    });

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8081/data', formData);
            console.log(formData);
            console.log(res)
        } catch (error) {
            console.error('Error posting data:', error);
        }
        navigate("/drug1");
    };

    return (
        <div class="pt-5">






            <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>


                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Id</label>
                        <input onChange={(e) => setFormData({ ...formData, item_id: e.target.value })} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
                        <input type="text" onChange={(e) => setFormData({ ...formData, item_name: e.target.value })} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dosage</label>
                        <input type="text" onChange={(e) => setFormData({ ...formData, dosage: e.target.value })} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" onChange={(e) => setFormData({ ...formData, rate: e.target.value })} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry Date</label>
                        <input type="text" onChange={(e) => setFormData({ ...formData, ex_date: e.target.value })} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                        <input onChange={(e) => setFormData({ ...formData, stock: e.target.value })} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>

                    <div class="flex justify-between">
                        <div >
                            <button
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                                className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
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
    )
}
export default Create1;