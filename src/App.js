import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Accueil from "./pages/Accueil";
import MentionsLegales from "./pages/MentionsLegales";

export default function App () {
  return (
    <div>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
          <Container>
              <Navbar.Brand as={Link} to="/">John Doe</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto text-uppercase" variant="underline">
                            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/realisations">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/mentionslegales">Mentions Légales</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
          </Navbar>
      </header>
      <main>

      </main>


      <Routes>
        <Route path="/" element = {<Accueil/>}></Route>
        <Route path="services" element = {<Services/>}></Route>
        <Route path="contact" element = {<Contact/>}></Route>
        <Route path="realisations" element = {<Realisations/>}></Route>
        <Route path="mentionslegales" element = {<MentionsLegales/>}></Route>
      </Routes>


      <footer>
        <Container fluid>
            <Row className = "bg-dark text-light p-4">
                <Col className="mx-5 mb-4 colFooter">
                    <h3>John Doe</h3>
                    <ul className="list-group list-unstyled">
                        <li>38, Rue de Lille</li>
                        <li>75007 Paris, France</li>
                        <li>06 06 06 06 06</li>
                        <li>johndoe@gmail.com</li>
                    </ul>
                    <a href="https://github.com/github-john-doe" target="blank" className="link-light"><i class="bi bi-github fs-2 icone" rel="nofollow"></i></a>
                    <a href="https://x.com/fr" target="blank" className="link-light"><i class="bi bi-twitter-x fs-2 mx-3 icone" rel="nofollow"></i></a>
                    <a href="https://www.linkedin.com/in/johndoes/" target="blank" className="link-light"><i class="bi bi-linkedin fs-2 icone" rel="nofollow"></i></a>
                </Col>

                <Col className="mx-5 mb-4 colFooter">
                <h3>Liens utiles</h3>
                    <ul className="list-group list-unstyled">
                        <Link to="/" className="nav-link linkFooter">Home</Link>
                        <Link to="/services" className="nav-link linkFooter">Services</Link>
                        <Link to="/realisations" className="nav-link linkFooter" rel="noindex">Portfolio</Link>
                        <Link to="/contact" className="nav-link linkFooter">Contact</Link>
                        <Link to="/mentionslegales" className="nav-link linkFooter">Mentions Légales</Link>
                    </ul>                        
                </Col>

                <Col className="mx-5 mb-4 colFooter">
                <h3>Mes dernières réalisations</h3>
                    <ul className="list-group list-unstyled">
                        
                    </ul>         
                </Col>
            </Row>
        </Container>
            </footer>
    </div>
  );
}


