import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const OrderDetails = ({ order }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    Details
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Order: {order._id}</p>
                    <div className="d-flex justify-content-around">
                        <h5>Name: {order.customer.name}</h5>
                        
                        <h5>Age: {order.customer.age}</h5>
                    </div>
                    <h5>Email: {order.customer.email}</h5>

                    <h6>Order Details</h6>
                    <ul>
                        <li>
                            {order.orderDetail.cloth}
                        </li>
                        <li>
                            {order.orderDetail.color}
                        </li>
                    </ul>

                    <h6>Size Details</h6>
                    <ul>
                        <li>
                            Kurta Length: {order.customer.size.kurtalength}
                        </li>
                        <li>
                            Chest: {order.customer.size.chest}
                        </li>
                        <li>
                            Waist: {order.customer.size.waist}
                        </li>
                        <li>
                            Hips: {order.customer.size.hips}
                        </li>
                        <li>
                            Shoulders: {order.customer.size.shoulders}
                        </li>
                        <li>
                            Sleeves: {order.customer.size.sleeves}
                        </li>
                        <li>
                            Collar: {order.customer.size.collar}
                        </li>
                        <li>
                            Shalwar Length: {order.customer.size.shalwarlength}
                        </li>
                    </ul>

                    <h5>Status: {order.orderStatus}</h5>
                    <h5>Order Placed Date: {order.createdAt.split("T")[0]}</h5>
                    <h5>Collection Date: {order.collectAt.split("T")[0]}</h5>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default OrderDetails;
