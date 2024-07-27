import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
function Choose1({ billId, setBillId }) {
  const uniqueId = Date.now();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const data1 = []
  const [customer_id, setCustomerId] = useState('');
  const initialCustomerName = JSON.parse(window.sessionStorage.getItem('customer_name')) || '';
  const [customer_name, setCustomerName] = useState(initialCustomerName);
 const [add, setAdd] = useState('add')
  const [search,setSearch] = useState("");
  const notify =()=>{
    
    toast("added")
  } 
 
  // setCustomerId(uniqueId2) console.log(uniqueId2);
   console.log(uniqueId);

  // setBillId(uniqueId);

  const [items, setItems] = useState([{
    item_id: 0, name: "", quantity: 0
  }])
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity
    }));
    console.log(quantities)
  };

  const handleDecrement = (itemId) => {
    handleQuantityChange(itemId, Math.max((quantities[itemId] || 0) - 1, 1));
  };

  const handleIncrement = (itemId) => {
    handleQuantityChange(itemId, Math.min((quantities[itemId] || 0) + 1, 5));
  };

  //------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await axios.get('http://localhost:8081/get_data');
        if (JSON.stringify(res.data) !== JSON.stringify(data)) {


          console.log(res.data.data)
          setData(res.data.data)
        }
      } catch (error) {
        console.error('Error fetching data on data change:', error);
      }
    };
    if (data) {
      fetchData();
    }
  }, []);

  const arrayd = (quantity, item) => {
    console.log("hello")

    const newitem = { item_id: item.item_id, name: item.item_name, quantity: quantities }

    setItems(p => [...p, newitem]);
    setAdd('added')
    //console.log(items)
    //setClicked(true);
    console.log('guruji')
    notify();
  };


  const handleclick = (e) => {

    let x = billId + 1

   
    e.preventDefault();
    items.map((obj) => {

      if (obj.item_id != 0) {


        const handleInsert = async () => {

          try {
            const res = await axios.post(`http://localhost:8081/post_data/${uniqueId}`, obj);

            console.log({ obj, billId })
          } catch (error) {
            console.error('Error posting data:', error);
          }
        }
        handleInsert()
      }
    })

    const handleInsert1 = async () => {
      const uniqueId2 = Date.now();
      try {
        const res = await axios.post(`http://localhost:8081/pres_data/${uniqueId}`, { customer_name, uniqueId2 });

        console.log({ customer_id, customer_name })
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
    handleInsert1();
    navigate(`/total/${uniqueId}`);
  };

  return (
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
              {/* <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-1000">
                Item number
                </th> */}
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Item name
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Dosage
              </th>
              <th scope="col" class="px-6 py-3">
                Expiry date
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Stock
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3  bg-gray-50 dark:bg-gray-800">
                choose
              </th>

            </tr>
          </thead>
          <tbody>
            {

              data.filter((item) => {
                return search.toLowerCase() === "" ? item : item.item_name.toLowerCase().includes(search);
              }).map((item) => {
                return (
                  <tr key={item.item_id}  >
                    {/* <td>{item.item_id}</td> */}
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">{item.item_name}</th>
                    <td class="px-6 py-4">{item.dosage}</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.rate}</td>
                    <td class="px-6 py-4">{item.ex_date.slice(0,10)}</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.stock}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      <div className="relative flex items-center max-w-[11rem]">
                        <button
                          type="button"
                          onClick={() => handleDecrement(item.item_id)}
                          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                          </svg>
                        </button>
                        <input
                          type="text"
                          value={quantities[item.item_id] || 0}
                          onChange={(e) => setQuantity(e.target.value)}
                          readOnly
                          className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                        <button
                          type="button"
                          onClick={() => handleIncrement(item.item_id)}
                          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>

                    <td class="px-6 py-4">

                    <button type="button" onClick={() => arrayd(item.item_id, item)} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button> </td>
                    <ToastContainer/>
                  </tr>
                )

              }
              )
            }
          </tbody>
        </table>
      </div>
      <div class=" pt-5 flex justify-center" >
        <button
          type="submit"
          onClick={(e) => handleclick(e)}
          className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>

    </div>
  );
}
export default Choose1;