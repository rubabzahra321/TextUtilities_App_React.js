import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './TextArea.css';



function TextNavBar({ mode, togglemode }) {
    return (
        <Navbar
            expand="lg"
            bg={mode === "light" ? "light" : "dark"}
            data-bs-theme={mode === "light" ? "light" : "dark"}
        >
            
            <Container>
                <Navbar.Brand as={Link} to="/">TextUtilities-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Button className="mode" variant="primary" onClick={togglemode}>
                            Change Mode
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TextNavBar;