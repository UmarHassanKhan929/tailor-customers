import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./Customer.module.css";
import Table from "react-bootstrap/Table";
import CustomerRow from "../../components/AllCustomers/CustomerRow";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import AddCustomer from "../../components/AddCustomer/AddCustomer";
import SearchBar from "../../components/SearchBar";

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [query,setQuery] = useState("")

    function fetchData() {
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
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <div className="container">
                <div className={styles.main}>
                    <div>
                        <h1>Customers</h1>
                        <div className={styles.bar}>
                            <SearchBar setQuery={setQuery}/>
                            <AddCustomer  handleTableData={fetchData}/>
                        </div>
                    </div>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th >Details</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.filter(customer => customer.name.toLowerCase().includes(query)).map((customer) => {
                                return (
                                    <CustomerRow
                                        customer={customer}
                                        key={customer._id}
                                        handleTableData={fetchData}
                                    />
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default Customer;
