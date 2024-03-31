import {useState} from 'react'
import './App.css'
import axios from "axios";
import {Container, Row, Navbar, CardGroup, Col, Card, Form, Button} from "react-bootstrap";

function App() {
    const [images, setImages] = useState([])
    const [searchTerm, setSearchTerm] = useState('moon')
    const defaultImageCount = 12

    function pullImages() {
        axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_KEY}&q=${searchTerm}&image_type=photo&per_page=${defaultImageCount}`).then(
            result => {
                setImages(
                    result.data.hits
                )
                console.log(result.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    function updateSearchTerm(event) {
            const value = event.target.value;
            setSearchTerm(value);
    }

    return (
        <>
            <Container>
                <Row>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">Gallery Demo</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Row>

                <Row className="mt-3">
                    <Row>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Search</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={searchTerm}
                                    onChange={updateSearchTerm}
                                    placeholder="search"
                                />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <Button onClick={pullImages}>Submit Search</Button>
                        </Form.Group>
                    </Row>
                </Row>


                <Row className="mt-3">
                    <CardGroup>
                        {images.map((image, index) => (
                            <Col key={index} sm={4}>
                                <Card className="md-3">
                                    <Card.Img src={image.previewURL}/>
                                    <Card.Footer>
                                        <small className="text-muted">Link to large image</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </CardGroup>
                </Row>

            </Container>
        </>
    )
}

export default App
