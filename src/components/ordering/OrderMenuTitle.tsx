import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type OrderMenuTitleProps = {
    title: string
}
const OrderMenuTitle = ({title}:OrderMenuTitleProps) => {
    return (
        <Row className="order-header-wrapper">
            <Col md={12} className="p-0">
                <h1>{title}</h1>
            </Col>
        </Row>
    )
}

export default OrderMenuTitle
