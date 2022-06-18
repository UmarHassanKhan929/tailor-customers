import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./Order.module.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

import AddCustomer from "../../components/AddCustomer/AddCustomer";
import SearchBar from "../../components/SearchBar";
import AddOrder from "../../components/AddOrder/AddOrder";
import { Button } from "react-bootstrap";
import DeleteOrder from "../../components/DeleteOrder/DeleteOrder";
import UpdateOrder from "../../components/UpdateOrder/UpdateOrder";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [now, setNow] = useState(false);

    const [query, setQuery] = useState("");


    function fetchCustomers() {
        fetch("http://localhost:5000/api/customers", {
            headers: {
                "Content-Type": "application/json",
                headers: "application/json",
            },
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                setCustomers(data.customers);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchCustomers();
    }, []);

    function ShowOrders(param) {
        setNow(false)
        fetch(`http://localhost:5000/api/orders?orderStatus=${param}`, {
            headers: {
                "Content-Type": "application/json",
                headers: "application/json",
            },
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                setOrders(data.orders);
                setNow(true)
            })
            .catch((err) => {
                console.log(err);
            });
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

            <NavBar />
            <div className="container">
                <div className={styles.main}>
                    <div>
                        <h1>Orders</h1>
                        <div className={styles.filterbar}>
                            <div className={styles.optionsfilter}>
                                <div style={{"marginRight":"5px"}}>
                                    <Button variant="flat" value="Processing"onClick={e=>ShowOrders(e.target.value)}>Processing</Button>
                                </div>
                                <div>
                                    <Button variant="flat" value="Finished"onClick={e=>ShowOrders(e.target.value)}>Finished</Button>
                                </div>
                            </div>
                            <div className={styles.searchb}>
                                <SearchBar setQuery={setQuery} />
                                <AddOrder customers={customers} />
                            </div>
                        </div>
                    </div>

                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                                {now && orders.filter(order => order.customer.name.toLowerCase().includes(query)).map(order=>{
                                    return <tr key={order._id}>
                                        <td>{order.customer.name}</td>
                                        <td>{order.customer.phone}</td>
                                        <td>{order.orderStatus}</td>
                                        <td><OrderDetails order={order}/></td>
                                        <td><UpdateOrder order={order}/></td>
                                        <td><DeleteOrder data={order._id}/></td>
                                    </tr>
                                })}

                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default Order;
