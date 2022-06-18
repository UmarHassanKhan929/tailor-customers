import React from 'react'

import { useState } from "react";
import OrderModal from './OrderModal';

const AddOrder = ({customers}) => {

    const [customer, setCustomer] = useState("");
    const [cloth, setCloth] = useState("");
    const [color, setColor] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (e) => {
        e.preventDefault();

        if (cloth === "" || color === "" ||  customer === "") {
            return alert("Please fill in all fields");
        }

        const bodyData = {
            customer: customer,
            orderDetail: {
                cloth: cloth,
                color: color,

            },
        };
        fetch("http://localhost:5000/api/order/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData),
        })
            .then((res) => {
                console.log("New Order Added");
                return res.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });

        setColor("");
        setCloth("");
        setCustomer("");

        handleClose();
    };

  return (
    <>
        <OrderModal color={color} setColor={setColor} cloth={cloth} setCloth={setCloth} customer={customer} setCustomer={setCustomer} customers={customers} show={show}setShow={setShow}handleClose={handleClose}handleShow={handleShow}onSubmit={onSubmit} worktype={"Add"}/>
    </>
  )
}

export default AddOrder