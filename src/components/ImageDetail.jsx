import {Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";


export default function ImageDetail() {

    const params = useParams();

    return (
        <Container>
            <Row>
               Image Id is {params.id}
            </Row>
        </Container>
    )
}