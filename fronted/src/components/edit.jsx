import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
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
                navigate('/home')
            }
            else{
                alert("not updated");
            }
        })

        
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3" controlId="item_name">
                    <Form.Control
                        value={item_name}
                        onChange={(e) => setname(e.target.value)}
                        type="text"
                        placeholder="Enter Item Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="dosage">
                    <Form.Control
                        value={dosage}
                        onChange={(e) => setdosage(e.target.value)}
                        
                        type="text"
                        placeholder="Enter dosage"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="stock">
                    <Form.Control
                        value={stock}
                        onChange={(e) => setstock(e.target.value)}
                        type="text"
                        placeholder="Enter Item stock"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rate">
                    <Form.Control
                        value={rate}
                        onChange={(e) => setrate(e.target.value)}
                        type="text"
                        placeholder="Enter Item rate"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ex_date">
                    <Form.Control
                        value={ex_date}
                        onChange={(e) => setdate(e.target.value)}
                        type="text"
                        placeholder="Enter Item Expire date"
                    />
                </Form.Group>
                <Button onClick={handleSubmit} variant="success" type="submit">
                    Update
                </Button>
                <Link className="d-grid gap-2" to="/home">
                    <Button variant="info" size="lg">
                        HOME
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;
