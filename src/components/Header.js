import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, Container} from 'react-bootstrap'

class Header extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">About</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;