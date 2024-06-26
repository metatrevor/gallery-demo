import {useState} from 'react'
import axios from "axios";
import {Container, Row, CardGroup, Col, Card, Form, Button} from "react-bootstrap";
import AppNavBar from "./NavBar.jsx";


export default function ImageGrid() {
    const [images, setImages] = useState([])
    const [orientation, setOrientation] = useState('horizontal')
    const [searchTerm, setSearchTerm] = useState('moon')
    const defaultImageCount = 12

    function pullImages() {
        axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_KEY}&orientation=${orientation}&q=${searchTerm}&image_type=photo&per_page=${defaultImageCount}`).then(
            result => {
                setImages(
                    result.data.hits
                )
            }
        ).catch(error => {
            console.log(error)
        })
    }

    function handleSearchForm(event) {
        event.preventDefault();
        pullImages();
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
                        <Form onSubmit={handleSearchForm}>
                            <Form.Group className="mb-3">
                                <Form.Label>Search</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={searchTerm}
                                    onChange={updateSearchTerm}
                                    placeholder="search"
                                />
                            </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Select Orientation</Form.Label>
                            <Form.Control
                                as="select"
                                value={orientation}
                                onChange={e => {
                                  setOrientation(e.target.value);
                                }}
                            >
                              <option value="horizontal">Landscape</option>
                              <option value="vertical">Portrait</option>
                            </Form.Control>
                          </Form.Group>

                        </Form>
                    </Row>
                    <Col className="md-3">
                            <Button onClick={pullImages}>Submit Search</Button>
                    </Col>
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
