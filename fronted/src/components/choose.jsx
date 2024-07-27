import React, { useState,useEffect } from "react";
import { Button, Table,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Choose({billId,setBillId}){
 
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const data1=[]
  const [customer_id, setCustomerId] = useState('');
  const initialCustomerName = JSON.parse(window.sessionStorage.getItem('customer_name')) || '';
    const [customer_name, setCustomerName] = useState(initialCustomerName);
  const uniqueId = Date.now()
  
  const uniqueId2 = Date.now()
  //setCustomerId(uniqueId2)
    //console.log(customer_id);

  const [items,setItems]=useState([{
    item_id :0, name: "",quantity:0
  }])
  
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await axios.get('http://localhost:8081/get_data');
        if (JSON.stringify(res.data) !== JSON.stringify(data)) {
      
          setData(res.data.data)
          console.log(res.data)
        }
      } catch (error) {
        console.error('Error fetching data on data change:', error);
      }
    };
    if (data) {
      fetchData();
    }
  }, [data]); 

const arrayd = (quantity,item)=>{
  
  const newitem = {item_id : item.item_id, name: item.item_name,quantity:quantity}
  setItems(p=>[...p,newitem]);
  console.log(items)
};


const handleclick = (e) =>
  {

    let x=billId+1
    
    setBillId(uniqueId)
    e.preventDefault();
    items.map((obj)=>{
      console.log(obj.item_id)
      if(obj.item_id!=0)
        {
      const handleInsert= async()=>{
      
      try {
        const res = await axios.post(`http://localhost:8081/post_data/${uniqueId}`, obj);
     
        console.log({obj,billId})
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
    handleInsert()}
    })
    
    const handleInsert1= async()=>{
      
      try {
        const res = await axios.post(`http://localhost:8081/pres_data/${billId}`, {customer_name, uniqueId2});
     
        console.log({customer_id,customer_name})
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
    handleInsert1();
   navigate( "/total" );
  };
return(
        <div >
            <Table stripped bordered hover size = "sm" style={{ width: '150%' }}>
                <thead>
                    <tr>
                    <th style={{ width: '20%' }}>ITEM NUMBER</th>
                    <th style={{ width: '10%' }}>ITEM NAME</th>
                    <th>DOSAGE</th>
                    <th>STOCK</th>
                    <th>RATE</th>
                    <th>QUANTITY</th>
                    <th style={{ width: '20%' }}>EXPIRE DATE</th>
                  
                    </tr>
                   
                </thead>
                <tbody>
                    {
                        data.map( (item)=>{
                            return (
                            <tr key={item.item_id}  >
                                <td>{item.item_id}</td>
                                <td>{item.item_name}</td>
                                <td>{item.dosage}</td>
                                <td>{item.rate}</td> 
                                <td>{item.ex_date}</td>
                                <td>{item.stock}</td>
                                <td><Form className="d-grid gap-2" style={{ margin: "5rem" }} >
                <Form.Group className="mb-3" controlId="item_id">
                    <Form.Control
                        onChange={(e) => setQuantity(e.target.value)}
                        type="text"
                        placeholder="Enter Quantity"
                        required
                    />
                </Form.Group>
                </Form></td>
                                <td>
                                
                                    <Button   
                                        variant = "primary" onClick={() => arrayd(item.item_id,item)}>
                                            Add
                                    </Button>
                                   
                                </td>
            
                            </tr>
                            )

                        }
                    )
}
                </tbody>
            </Table>
            <Link className="d-grid gap-2" style={{ "text-docoration":"none"}} to="">
                <Button variant = "success" size="lg" onClick={handleclick}>Submit</Button>
                </Link>
                <Link className="d-grid gap-2" to="/billings">
                    <Button variant="info" size="lg">
                        Back
                    </Button>
                </Link> 
        </div>
);
}
export default Choose;