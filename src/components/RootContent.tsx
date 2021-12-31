import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type RootContentProps = {
    children: any
}

const RootContent = ({ children }: RootContentProps) => {
    return (
        <Row className="m-0 p-0">
            <Col md={12} className="p-0">
                { children }
            </Col>
        </Row>
    )
}

export default RootContent
