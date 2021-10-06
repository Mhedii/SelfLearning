import React from 'react';
import { Navbar } from 'react-bootstrap';
import "./Footer.css"


const Footer = () => {
    return (

        <Navbar fixed="bottom" bg="dark" variant="dark">
            <h5 className="Text">&copy; copyright 2021</h5>
        </Navbar>
    );
};

export default Footer;