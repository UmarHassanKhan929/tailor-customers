import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Modal, Button, Form } from "react-bootstrap";

const CustomerModal = ({ ...props }) => {
    var setters = false;
    if (props.worktype !== "View") {
        setters = true;
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
            <div>
                <Button variant="flat" onClick={props.handleShow}>
                    {props.worktype} Customer
                </Button>
            </div>

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.worktype} Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={props.onSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={props.name}
                                onChange={(e) =>
                                    setters
                                        ? props.setName(e.target.value)
                                        : console.log(e.type)
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={props.email}
                                onChange={(e) =>
                                    setters
                                        ? props.setEmail(e.target.value)
                                        : console.log(e)
                                }
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group
                                controlId="formBasicPhone"
                                md={6}
                                as={Col}
                            >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="phone"
                                    placeholder="Phone"
                                    value={props.phone}
                                    onChange={(e) =>
                                        setters
                                            ? props.setPhone(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>
                            <Form.Group
                                controlId="formBasicAge"
                                md={6}
                                as={Col}
                            >
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Age"
                                    value={props.age}
                                    onChange={(e) =>
                                        setters
                                            ? props.setAge(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <br />
                        <Form.Label>Size in inches</Form.Label>
                        <Row className="mb-3">
                            <Form.Group
                                controlId="formBasicKurta"
                                md={4}
                                as={Col}
                            >
                                <Form.Label>Kurta Length</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Kurta length"
                                    value={props.kurtalength}
                                    onChange={(e) =>
                                        setters
                                            ? props.setKurtalength(
                                                  e.target.value
                                              )
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formBasicChest"
                                md={4}
                                as={Col}
                            >
                                <Form.Label>Chest</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Chest"
                                    value={props.chest}
                                    onChange={(e) =>
                                        setters
                                            ? props.setChest(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formBasicWaist"
                                md={4}
                                as={Col}
                            >
                                <Form.Label>Waist</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Waist"
                                    value={props.waist}
                                    onChange={(e) =>
                                        setters
                                            ? props.setWaist(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group
                                controlId="formBasicHips"
                                md={4}
                                as={Col}
                            >
                                <Form.Label>Hips</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Hips"
                                    value={props.hips}
                                    onChange={(e) =>
                                        setters
                                            ? props.setHips(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formBasicShoulder"
                                md={4}
                                as={Col}
                            >
                                <Form.Label>Shoulders</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Shoulders"
                                    value={props.shoulders}
                                    onChange={(e) =>
                                        setters
                                            ? props.setShoulders(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formBasicSleeve"
                                md={4}
                                as={Col}
                            >
                                <Form.Label>Sleeves</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Sleeves"
                                    value={props.sleeves}
                                    onChange={(e) =>
                                        setters
                                            ? props.setSleeves(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group
                                controlId="formBasicCollar"
                                md={6}
                                as={Col}
                            >
                                <Form.Label>Collar</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Collar"
                                    value={props.collar}
                                    onChange={(e) =>
                                        setters
                                            ? props.setCollar(e.target.value)
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formBasicShoulder"
                                md={6}
                                as={Col}
                            >
                                <Form.Label>Shalwar Length</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Shalwar"
                                    value={props.shalwarlength}
                                    onChange={(e) =>
                                        setters
                                            ? props.setShalwarlength(
                                                  e.target.value
                                              )
                                            : console.log(e)
                                    }
                                />
                            </Form.Group>
                        </Row>

                        <br></br>

                        {props.worktype === "View" ? (
                            ""
                        ) : (
                            <Button variant="flat" type="submit" block>
                                {props.worktype} Customer
                            </Button>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CustomerModal;
