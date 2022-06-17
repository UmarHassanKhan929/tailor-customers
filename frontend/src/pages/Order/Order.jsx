import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import styles from './Order.module.css' 

const Order = () => {
    return (
        <>
            <NavBar />
            <div className="container" >
                <div className={styles.main}>
                    <h1>
                        Orders
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Order;
