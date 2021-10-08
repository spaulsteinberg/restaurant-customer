import React from 'react';
import Card from 'react-bootstrap/Card'
import { IItems } from '../../models/firebaseMenuResponse';
import logo from './istockphoto-1157515115-612x612.jpg'

type OrderItemProps = {
    item:IItems;
}

const OrderItem = ({item}:OrderItemProps) => {
    return (
        <Card className="order-item">
            <Card.Img variant="top" src={logo} />
            <Card.Body className="text-dark">
                <Card.Title>{item.item}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <p className="m-0">${item.price}</p>
            </Card.Body>
        </Card>
    )
}

export default OrderItem
