import React, { useState,useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Vendor() {
    // return (
    //     <div> <h2>BIlling Section</h2></div>
    //   );

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {

        try {
          const res = await axios.get('http://localhost:8081/vendor_data');
          if (JSON.stringify(res.data) !== JSON.stringify(data)) {
            setData(res.data.data);
            console.log(res.data.data);
          }
        } catch (error) {
          console.error('Error fetching data on data change:', error);
        }
      };
      if (data) {
        fetchData();
      }
    }, [data]); 
  return (
    <div >
            <Table stripped bordered hover size = "sm" style={{ width: '150%' }}>
                <thead>
                    <tr>
                    <th style={{ width: '20%' }}>Supplier Id</th>
                    <th style={{ width: '20%' }}>Supplier Name</th>
                    <th style={{ width: '10%' }}>Company</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>orders</th>
                    <th>Delete</th>
                    </tr>
                   
                </thead>
                <tbody>
                    {
                        data.map( (item)=>{
                            return (
                            <tr key={item.supplier_id}>
                                <td>{item.supplier_id}</td>
                                 <td>{item.supplier_name}</td>
                                <td>{item.company}</td>
                                <td>{item.p_no}</td>
                                <td>{item.address}</td>
                                <td>
                                    <Link to={`/order/${item.supplier_id}`}>
                                    <Button
                                        variant = "primary">
                                            ORDERS
                                    </Button></Link>
                                   
                                </td>
                                <td>
                                <Button onClick={() => remdata(item.supplier_id)}
                                        variant = "danger"> remove
                                    </Button>
                                </td>
                            </tr>
                            )

                        }
                    )
}
                </tbody>
            </Table>
            <Link className="d-grid gap-2" style={{ "text-docoration":"none"}} to="/new">
                <Button variant = "success" size="lg">CREATE</Button>
                </Link>
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Back
                    </Button>
                </Link> 
        </div>
);
}
export default Vendor; 