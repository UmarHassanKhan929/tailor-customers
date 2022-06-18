import React from "react";
import Col from "react-bootstrap/Col";

import { Modal, Button, Form } from "react-bootstrap";

const OrderModal = ({ ...props }) => {

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

                                         props.setCloth(e.target.value)

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

                                        props.setColor(e.target.value)

                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCustomer" as={Col}>
                            <Form.Label>Customer</Form.Label>
                            <Form.Select
                                aria-label="Select Customer"
                                value={props.customer._id}
                                onChange={(e) =>

                                         props.setCustomer(e.target.value)

                                }
                            >
                                <option>Select Customer</option>
                                {props.customers.map((cstmr)=>{
                                   return <option value={cstmr._id} title={`${cstmr.email} ${cstmr.phone}`} key={cstmr._id}>{cstmr.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>

                        <br></br> 
                            <Button variant="flat" type="submit" block>
                                {props.worktype} Order
                            </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default OrderModal;
