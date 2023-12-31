import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppBar() {
  return (
    <Navbar expand="lg" className="bg-primary fs-4">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-3 text-white">
          Hotel Booking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home" clasName="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/booking">Bookings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
