import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
    return (
        <Navbar >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="LOGO"
              src="https://i.postimg.cc/zBfDFW1B/Screenshot-2.png"
              width="30"
              height="30"
              
              className="d-inline-block align-top"
            />{' '}
            <span style={{color:"white"  }} >BE FIT</span> 
          </Navbar.Brand>
        </Container>
      </Navbar>
        
    
    );
};

export default Nav;



