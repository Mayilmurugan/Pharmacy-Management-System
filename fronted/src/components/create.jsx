import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import axios from 'axios';

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
function Create() {
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
        navigate("/home");
    };






    return (
        <div claSS = "pt-10">
            
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="item_id">
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, item_id: e.target.value })}
                        type="text"
                        placeholder="Enter Item id"
                        required
                        class="rounded-2xl"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="item_name">
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, item_name: e.target.value })}
                        type="text"
                        placeholder="Enter Item Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="dosage">
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                        type="text"
                        placeholder="Enter Item Dosage"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rate">
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                        type="text"
                        placeholder="Enter rate Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ex_date">
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, ex_date: e.target.value })}
                        type="text"
                        placeholder="Enter Item Expire Date"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="stock">
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                        type="text"
                        placeholder="Enter Item Stock"
                        required
                    />
                </Form.Group>





                <Button onClick={(e) => handleSubmit(e)}
                    variant="success"
                    type="submit">
                    submit
                </Button>
                <Link className="d-grid gap-2" to="/home">
                    <Button variant="info" size="lg">
                        Back
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create

