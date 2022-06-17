import React from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
import {BsScissors} from 'react-icons/bs'
const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand> <BsScissors/> Tailors Cave</Navbar.Brand>
                    
                    <Nav className="me-auto" >
                        <NavItem>
                            <Link to="/" className={styles.link}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/customer" className={styles.link}>Customers</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/order" className={styles.link}>Orders</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
