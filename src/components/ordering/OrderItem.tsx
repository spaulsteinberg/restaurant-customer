import React from 'react';
import Card from 'react-bootstrap/Card'
import logo from './istockphoto-1157515115-612x612.jpg'

type OrderItemProps = {

}

const OrderItem = (props: OrderItemProps) => {
    return (
        <Card className="order-item">
            <Card.Img variant="top" src={logo} />
            <Card.Body className="text-dark">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default OrderItem
