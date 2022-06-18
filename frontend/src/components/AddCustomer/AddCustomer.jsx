import React from "react";

import { useState } from "react";

import CustomerModal from "../CustomerModal";

const URL = require("../../url");

const AddCustomer = ({handleTableData}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState();

    const [kurtalength, setKurtalength] = useState();
    const [chest, setChest] = useState();
    const [waist, setWaist] = useState();
    const [hips, setHips] = useState();
    const [shoulders, setShoulders] = useState();
    const [sleeves, setSleeves] = useState();
    const [collar, setCollar] = useState();
    const [shalwarlength, setShalwarlength] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (e) => {
        e.preventDefault();

        if (name === "" || email === "" || phone === "" || age === 0) {
            return alert("Please fill in all fields");
        }

        const bodyData = {
            name: name,
            email: email,
            phone: phone,
            age: age,
            size: {
                kurtalength: kurtalength,
                chest: chest,
                waist: waist,
                hips: hips,
                shoulders: shoulders,
                sleeves:sleeves,
                collar: collar,
                shalwarlength: shalwarlength,
            },
        };
        fetch("http://localhost:5000/api/customer/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData),
        })
            .then((res) => {
                console.log("New Customer Added");
                return res.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });

        setName("");
        setEmail("");
        setPhone("");
        setAge();

        handleClose();

        handleTableData();
    };

    return (
        <>
            <CustomerModal name={name} email={email} phone={phone} age={age}kurtalength={kurtalength} chest={chest} waist={waist} hips={hips} shoulders={shoulders}sleeves={sleeves}collar={collar}shalwarlength={shalwarlength}setName={setName}setAge={setAge}setEmail={setEmail}setPhone={setPhone}setKurtalength={setKurtalength}setChest={setChest}setWaist={setWaist}setHips={setHips}setShalwarlength={setShalwarlength}setShoulders={setShoulders}setSleeves={setSleeves}setCollar={setCollar}show={show}setShow={setShow}handleClose={handleClose}handleShow={handleShow}onSubmit={onSubmit} worktype={"Add"}/>
        </>
    );
};

export default AddCustomer;
