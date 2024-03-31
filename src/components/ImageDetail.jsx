import { Card, Container, Row, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import AppNavBar from "./NavBar.jsx";


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

    useEffect(() => {
            getLargeImageURL()
        }
    )

    return (
        <Container>
            <AppNavBar/>
            <Row className="mt-3">
                <Card>
                    <Card.Title>Image Detail</Card.Title>
                    <Card.Img src={largeImgUrl}/>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>User</th>
                                <th>Tags</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{user}</td>
                                <td>{tags}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}