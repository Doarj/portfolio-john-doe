import "../App.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Coord from "../components/CoorContact";

const Contact = ()=> {
    return (


    <Container className="mt-5 pt-5 text-center">

        <h1 className="fw-bold">Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <Row>
            <Col></Col>
            <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
            <Col></Col>     
        </Row>

        <Card className="mb-4 cardBox">
            <Row className="text-start">
                <Col className="mb-4">
                    <h4 className="fw-bold">Formulaire de contact</h4>
                    <hr className="border border-primary border-2 opacity-100 mb-5"/>
                    <ContactForm />

                </Col>

                <Col>
                    <h4 className="fw-bold">Mes coordonnées</h4>
                    <hr className="border border-primary border-2 opacity-100 mb-5"/>
                    <Coord />
                    <div className="mt-2 box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.965398388792!2d2.3251663922946473!3d48.85854029741455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e29afa8e9f5%3A0x47c6dfc49eb82f1d!2s38%20Rue%20de%20Lille%2C%2075007%20Paris!5e0!3m2!1sfr!2sfr!4v1749470033476!5m2!1sfr!2sfr" width="600" 
                    height="450" styleName="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                    title="adresse"></iframe>
                    </div>

                </Col>
            </Row>
        </Card>

        
    </Container>

    )
}

export default Contact;