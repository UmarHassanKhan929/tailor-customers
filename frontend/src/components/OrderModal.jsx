import React from "react";
import { FaUser } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Modal, Button, Form } from "react-bootstrap";

const OrderModal = ({ ...props }) => {
    var setters = false;
    if (props.worktype !== "View") {
        setters = true;
    }
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
                <Button variant="flat" onClick={props.handleShow}>
                    {props.worktype} Order
                </Button>
            </div>

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.worktype} Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={props.onSubmit}>
                        <Form.Group controlId="formBasicCloth">
                            <Form.Label>Cloth</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Cloth type"
                                value={props.cloth}
                                onChange={(e) =>
                                    setters
                                        ? props.setCloth(e.target.value)
                                        : console.log(e.type)
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Color"
                                value={props.color}
                                onChange={(e) =>
                                    setters
                                        ? props.setColor(e.target.value)
                                        : console.log(e)
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCustomer" as={Col}>
                            <Form.Label>Customer</Form.Label>
                            <Form.Select
                                aria-label="Select Customer"
                                value={props.customer._id}
                                onChange={(e) =>
                                    setters
                                        ? props.setCustomer(e.target.value)
                                        : console.log(e)
                                }
                            >
                                <option>Select Customer</option>
                                {props.customers.map((cstmr)=>{
                                   return <option value={cstmr._id} title={`${cstmr.email} ${cstmr.phone}`} key={cstmr._id}>{cstmr.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>

                        <br></br>

                        {props.worktype === "View" ? (
                            ""
                        ) : (
                            <Button variant="flat" type="submit" block>
                                {props.worktype} Order
                            </Button>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default OrderModal;
