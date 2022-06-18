import React from "react";
import Table from "react-bootstrap/Table";
import CustomerDetail from "../ViewCustomer/CustomerDetail";
import CustomerUpdate from "../UpdateCustomer/CustomerUpdate";
import CustomerDelete from "../DeleteCustomer/CustomerDelete";
const CustomerRow = ({ customer, handleTableData}) => {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.age}</td>
            <td>{customer.phone}</td>
            <td>{customer.email}</td>
            <td><CustomerDetail data={customer}/></td>
            <td><CustomerUpdate data={customer} handleTableData={handleTableData} /></td>
            <td><CustomerDelete data={customer._id} handleTableData={handleTableData}/></td>
        </tr>
    );
};

export default CustomerRow;
