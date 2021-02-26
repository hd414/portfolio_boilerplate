import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './navbar.style.css';
import {Link} from 'react-router-dom';


const NavBar = () =>{
    return (
     <div>
         
        <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbar">
            <Navbar.Brand >Himanshu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" href="#about">About</Nav.Link>
                    <Nav.Link as={Link} to="/skills" href="#skills">Skills</Nav.Link>
                    <Nav.Link as={Link} to="/projects" href="#projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/contact" href="#contact">Contact</Nav.Link>                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     </div>
    );
}

export default NavBar;