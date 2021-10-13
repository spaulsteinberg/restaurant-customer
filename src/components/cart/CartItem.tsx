import Card from "react-bootstrap/Card";
import useWidth from "../../hooks/useWidth";

type CartItemProps = {
    data:any
}

const CartItem = ({data}:CartItemProps) => {
    const {wideView} = useWidth(768);
    // add in smaller column view
    return (
        <Card className="view-cart-item mb-4">
            <div style={{height: "200px", width: "200px", backgroundColor: "red"}}>img</div>
            <Card.Body>
                <Card.Title>{data.item}</Card.Title>
                <p>{data.description}</p>
                <p>{data.price} x {data.quantity} .... {(data.quantity * parseFloat(data.price)).toFixed(2)}</p>
            </Card.Body>
        </Card>
    )
}

export default CartItem;