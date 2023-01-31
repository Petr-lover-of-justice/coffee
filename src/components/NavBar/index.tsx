import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "..//../img/coffee-logo.png";
import s from "..//../components/NavBar/NavBar.module.scss"
function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <img className={s.logo} src={logo} alt="logo" />
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Brand href="#home">Like Coffee</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing">О Кофе</Nav.Link>
              <Nav.Link href="#pricing">Помолы</Nav.Link>
              <Nav.Link href="#pricing">Типы приготовления</Nav.Link>
              <Nav.Link href="#pricing">Подробнее</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="tel:+79098888888">+7(909)888-88-88</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                О нас
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;