import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavbarComp = ({isLogin}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link className="navbar-brand" to="/">
            <img src={'https://my-diet-diary.netlify.app/static/media/logo.0058396c63ced3e701fe.png'} alt="logo" width={50} />
            <strong className="ms-3">MAR Fashion</strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Beranda
            </Link>
            <Link to="/toko" className="nav-link">
              Toko
            </Link>
            {isLogin ? 
              <Link to="/analisis" className="nav-link">
                Login
              </Link> : <Link to="/admin" className="nav-link">
              Barang
            </Link>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
