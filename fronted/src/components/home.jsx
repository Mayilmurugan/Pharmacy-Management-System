import React, { useState,useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Home(){
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
        <div >
            <Table stripped bordered hover size = "sm" style={{ width: '150%' }}>
                <thead>
                    <tr>
                    <th style={{ width: '20%' }}>ITEM NUMBER</th>
                    <th style={{ width: '10%' }}>ITEM NAME</th>
                    <th>DOSAGE</th>
                    <th>STOCK</th>
                    <th>RATE</th>
                    <th style={{ width: '20%' }}>EXPIRE DATE</th>
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
                                <td>{item.ex_date}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <Link to={`/edit/${item.item_id}`}>
                                    <Button
                                        variant = "primary">
                                            UPDATE
                                    </Button></Link>
                                   
                                </td>
                                <td>
                                <Button onClick={() => remdata(item.item_id)}
                                        variant = "danger"> DELETE
                                    </Button>
                                </td>
                            </tr>
                            )

                        }
                    )
}
                </tbody>
            </Table>
            <Link className="d-grid gap-2" style={{ "text-docoration":"none"}} to="/Create">
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
export default Home;