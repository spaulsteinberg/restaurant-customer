import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoadingAlert from './utility/LoadingAlert'

type RootContentProps = {
    storeLoading: boolean|undefined,
    children: any
}

const RootContent = ({ storeLoading, children }: RootContentProps) => {
    return (
        <Row className="m-0 p-0">
            <Col md={12} className="p-0">
                {
                    storeLoading ? <LoadingAlert classTypes="loading-cart-from-server-spinner mt-4 mx-4 text-center"/> : children
                }
            </Col>
        </Row>
    )
}

export default RootContent
