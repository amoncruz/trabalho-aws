import React from 'react';
import {Navbar} from 'react-bootstrap';
import amazonIcon from '../assets/logo.png'
const Nav =()=>{

return(

        <>

        <Navbar bg="dark" variant="dark" className="navbar-edited">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={amazonIcon}
                width="50"
                height="50"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <h2>Tópicos Especiais de Sistemas</h2>
        </Navbar>
        </>

);

}

export default Nav;