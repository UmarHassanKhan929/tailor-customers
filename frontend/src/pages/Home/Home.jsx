import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./Home.module.css";
const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <h1 className={styles.emph}>
                            Make your life easy with Tailor Cave
                        </h1>
                        <br />
                        <h3>
                            A digital solution to your customers size
                            measurements for sewing
                        </h3>
                    </div>
                </div>
                <br />
                <div className={styles.secondbanner}>
                    <div>
                        <h2 className={styles.info}>How to use it ?</h2>
                    </div>
                    <div className={styles.secondbannercontent}>
                        <div className={styles.usage}>
                            <ul style={{"width":"400px"}}>
                                <li>In the Navigation bar, Go to Customers to add new customer sizes or update / delete older ones</li>
                                <br />
                                <li>Go to Orders to add new orders or update / delete older ones</li>
                            </ul>
                        </div>
                        <div >
                            <img src={require("../../assets/mnts.jpg")} alt="measurements" width={"400px"}/>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <Footer/>
        </div>
    );
};

export default Home;
