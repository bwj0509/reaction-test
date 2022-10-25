import { Navbar, Container } from 'react-bootstrap';

import { ReactComponent as Logo } from '../svg/logo.svg'

function Nav() {
    return (<> {/* 상단 Navbar구현*/}
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Logo width='40px' />
                    {" "}LOGO NAME
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href="/login">
                        <Navbar.Text>
                            Login
                        </Navbar.Text>
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default Nav;