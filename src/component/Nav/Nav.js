import { Navbar, Container } from "react-bootstrap";
import * as S from "component/Nav/NavStyle";
import Swal from "sweetalert2";

function Nav() {
  const handleLogin = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "What is your name?",
      inputPlaceholder: "Type your name",
      inputAttributes: {
        "aria-label": "Type your name",
      },
      showCancelButton: true,
    });
    localStorage.setItem("userName", text);
    window.location.href = "/";
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <S.Title>TEST YOUR EVERYTHING</S.Title>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            {localStorage.getItem("userName") ? (
              <Navbar.Text onClick={handleLogin}>
                {`${localStorage.getItem("userName")}님 환영합니다.`}
              </Navbar.Text>
            ) : (
              <Navbar.Text onClick={handleLogin}>Login</Navbar.Text>
            )}
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
