import React from "react";
import { Button } from "react-bootstrap";
const DeleteOrder = ({data,handleTableData}) => {

    const HandleDelete = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/order/${data}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                console.log("Order Yeeted");
                return res.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });

        
    };

    return (
        <>
            <Button variant="danger" onClick={HandleDelete}>Delete</Button>
        </>
    );
};

export default DeleteOrder;
