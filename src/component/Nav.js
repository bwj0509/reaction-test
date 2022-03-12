import React from 'react';
import { Navbar, Container } from 'react-bootstrap'


function Nav() {
    return (
    <>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="../logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{'  '}
        반응속도 테스트
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <div>백우진</div>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
  }
  
  export default Nav;
  