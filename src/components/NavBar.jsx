import {Container, Navbar, Row} from "react-bootstrap";

export default function AppNavBar() {
    return (<Row>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Gallery Demo</Navbar.Brand>
                </Container>
            </Navbar>
        </Row>
    )
}