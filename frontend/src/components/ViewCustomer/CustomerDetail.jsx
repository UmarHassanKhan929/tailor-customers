import React from 'react'
import CustomerModal from '../CustomerModal'
import { useState } from 'react';

const CustomerDetail = ({data}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <CustomerModal name={data.name} email={data.email} phone={data.phone} age={data.age}kurtalength={data.size.kurtalength} chest={data.size.chest} waist={data.size.waist} hips={data.size.hips} shoulders={data.size.shoulders}sleeves={data.size.sleeves}collar={data.size.collar}shalwarlength={data.size.shalwarlength}show={show}setShow={setShow}handleClose={handleClose}handleShow={handleShow} worktype={"View"}/>
    </>
  )
}

export default CustomerDetail