import {useState} from 'react'
import './App.css'
import axios from "axios";
import {Container, Row, Navbar, CardGroup, Col, Card} from "react-bootstrap";

function App() {
    const [images, setImages] = useState([])
    const [searchTerm, setSearchTerm] = useState('moon')
    const defaultImageCount = 5

    function pullImages(search) {
        axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_KEY}&q=${search}&image_type=photo&per_page=${defaultImageCount}`).then(
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

                <Row>
                    <h3>Pull Images From Pixabay</h3>
                    <div className="card">
                        <button onClick={() => pullImages(searchTerm)}>
                            Pull images
                        </button>
                    </div>
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
