import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useState} from "react";


export default function ImageDetail() {

    const [largeImgUrl, setlargeImgUrl] = useState('')
    const [user, setUser] = useState('')
    const [tags, setTags] = useState('')
    const params = useParams();

    function getLargeImageURL() {
        const imageId = params.id
        axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_KEY}&id=${imageId}&image_type=photo`).then(
            result => {
                setlargeImgUrl(result.data.hits[0].largeImageURL)
                setUser(result.data.hits[0].user)
                setTags(result.data.hits[0].tags)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>
            <Row>
                <Card.Img src={largeImgUrl}/>
            </Row>

            <Row>
                <Form.Group className="mb-3 mt-3">
                    <p>user: {user}</p>
                    <p>tags: {tags}</p>
                    <Button onClick={getLargeImageURL}>Load Large Image</Button>
                </Form.Group>
            </Row>
        </Container>
    )
}