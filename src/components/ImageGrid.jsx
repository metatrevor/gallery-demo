import {useState} from 'react'
import axios from "axios";
import {Container, Row, CardGroup, Col, Card, Form, Button} from "react-bootstrap";
import AppNavBar from "./NavBar.jsx";


export default function ImageGrid() {
    const [images, setImages] = useState([])
    const [searchTerm, setSearchTerm] = useState('moon')
    const defaultImageCount = 12

    function pullImages() {
        axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_KEY}&q=${searchTerm}&image_type=photo&per_page=${defaultImageCount}`).then(
            result => {
                setImages(
                    result.data.hits
                )
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
                <AppNavBar/>
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
                                    <Card.Img src={image.previewURL} onClick={() => {
                                        window.open(`/detail/${image.id}`, '_blank')?.focus()
                                    }}/>
                                </Card>
                            </Col>
                        ))}
                    </CardGroup>
                </Row>

            </Container>
        </>
    )
}
