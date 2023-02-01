import { Navbar, Container } from "react-bootstrap";
import * as S from "component/Nav/NavStyle";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <S.Title style={{ display: "inline", color: "rgba(255,255,255,.8)" }}>
            TEST YOUR EVERYTHING
          </S.Title>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="/login">
            <Navbar.Text>Login</Navbar.Text>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
