// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <h1 className="text-warning ps-5"><span className="text-danger">Self</span >Learning</h1>
            <nav >
                <NavLink activeStyle={activeStyle} to="/home" className="p-3">Home</NavLink>
                <NavLink activeStyle={activeStyle}
                    to="/service" className="p-3">Services</NavLink>
                <NavLink activeStyle={activeStyle} to="/about" className="p-3">AboutUs</NavLink>
                <NavLink activeStyle={activeStyle} to="/contact" className="p-3">ContactUs</NavLink>
            </nav>
        </Navbar>




    );
};

export default Header;