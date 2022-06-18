import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const UpdateOrder = ({ order }) => {
    const [status, setStatus] = useState(order.orderStatus);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (e) => {
        e.preventDefault();

        if (status === "") {
            return alert("Please fill in all fields");
        }

        const bodyData = {
            orderStatus: status,
        };
        fetch(`http://localhost:5000/api/order/${order._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData),
        })
            .then((res) => {
                console.log("Order Updated");
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

        handleClose();
    };
    return (
        <>
            <style type="text/css">
                {`
                    .btn-flat {
                    background-color: pink;
                    color: black;
                    }
                    .btn-flat:hover {
                        background-color: pink;
                        color: white;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                `}
            </style>
            <div>
                <Button variant="flat" onClick={handleShow}>
                    Update Order
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicId">
                            <Form.Label>Order ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="OrderID"
                                value={order._id}
                                readOnly
                            />
                        </Form.Group>
<br />
                        <Row className="mb-3">
                        <Form.Group
                                controlId="formBasicCreated"
                                md={6}
                                as={Col}
                            >
                                <Form.Label>Date Order Placed</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Hips"
                                    value={order.createdAt.split("T")[0]}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formBasicCollected"
                                md={6}
                                as={Col}
                            >
                                <Form.Label>To be Collected on</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Shoulders"
                                    value={order.collectAt.split("T")[0]}
                                    readOnly
                                />
                            </Form.Group>
                        </Row>


                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name"
                                value={order.customer.name}
                                readOnly
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCloth">
                            <Form.Label>Cloth</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cloth"
                                value={order.orderDetail.cloth}
                                readOnly
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Color"
                                value={order.orderDetail.color}
                                readOnly
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCustomer" >
                            <Form.Label>Status </Form.Label>
                            <Form.Select
                                aria-label="Select Status"
                                onChange={(e) =>setStatus(e.target.value)}
                            >
                                <option>Select Customer</option>
                                <option value="Processing" t>Processing</option>
                                <option value="Finished" t>Finished</option>
                            </Form.Select>
                        </Form.Group>
                        

                        <br></br>

                        <Button variant="flat" type="submit" block>
                                Update Order
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default UpdateOrder;
