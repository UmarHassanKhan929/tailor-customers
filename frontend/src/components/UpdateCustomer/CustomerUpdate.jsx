import React from "react";

import { useState } from "react";

import CustomerModal from "../CustomerModal";

const CustomerUpdate = ({data,handleTableData}) => {
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [phone, setPhone] = useState(data.phone);
    const [age, setAge] = useState(data.age);

    const [kurtalength, setKurtalength] = useState(data.size.kurtalength);
    const [chest, setChest] = useState(data.size.chest);
    const [waist, setWaist] = useState(data.size.waist);
    const [hips, setHips] = useState(data.size.hips);
    const [shoulders, setShoulders] = useState(data.size.shoulders);
    const [sleeves, setSleeves] = useState(data.size.sleeves);
    const [collar, setCollar] = useState(data.size.collar);
    const [shalwarlength, setShalwarlength] = useState(data.size.shalwarlength);

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
        fetch(`http://localhost:5000/api/customer/${data._id}`, {
            method: "PUT",
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


        handleClose();
        handleTableData();
    };

    return (
        <>
            <CustomerModal name={name} email={email} phone={phone} age={age}kurtalength={kurtalength} chest={chest} waist={waist} hips={hips} shoulders={shoulders}sleeves={sleeves}collar={collar}shalwarlength={shalwarlength}setName={setName}setAge={setAge}setEmail={setEmail}setPhone={setPhone}setKurtalength={setKurtalength}setChest={setChest}setWaist={setWaist}setHips={setHips}setShalwarlength={setShalwarlength}setShoulders={setShoulders}setSleeves={setSleeves}setCollar={setCollar}show={show}setShow={setShow}handleClose={handleClose}handleShow={handleShow}onSubmit={onSubmit} worktype={"Update"}/>
        </>
    );
};

export default CustomerUpdate;
