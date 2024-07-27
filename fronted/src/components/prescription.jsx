import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import axios from 'axios';

function Prescription() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8081/presc_data');
                const newData = res.data.data;

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

    return (
        <section className="sm:ml-64">

            <div class="flex justify-center">

                <h1 class="mb-4 mt-4 text-xl font-extrabold leading-none tracking-tight text-purple-700  dark:text-purple">Customer details</h1>


            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Customer id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Customer name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bill number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bill
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return (
                                    <tr key={item.customer_id}>
                                        <td class="px-3 py-3">{item.customer_id}</td>
                                        <td class="px-3 py-3">{item.customer_name}</td>
                                        <td class="px-3 py-3">{item.bill_no}</td>
                                        <td class="px-6 py-4">
                                            <Link to={`/detail/${item.bill_no}`} href="#" class="font-medium text-purple-600 dark:text-purple-500 hover:underline">Bill</Link>
                                        </td>
                                    </tr>
                                )

                            }
                            )
                        }

                    </tbody>
                </table>
            </div>

        </section>
    )
}
export default Prescription; 