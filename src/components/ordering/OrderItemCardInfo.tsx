import React from 'react';
import Card from 'react-bootstrap/Card'

type OrderItemInfoCardProps = {
    photo:any;
    name:string;
    description:string;
    price:string;
}

const OrderItemInfoCard = ({photo, name, description, price}:OrderItemInfoCardProps) => {
    return (
        <React.Fragment>
            {
                photo 
                ? 
                <div className="menu-item-img">
                    <Card.Img variant="top" src={photo} />
                </div>
                : 
                <div className="noshow-div">No photo available.</div>
            }
            <Card.Body className="text-dark">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <p className="m-0">${price}</p>
            </Card.Body>
        </React.Fragment>
    )
}

export default OrderItemInfoCard;