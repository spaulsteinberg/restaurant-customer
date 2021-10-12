import { Card } from "react-bootstrap";
import useWidth from "../../hooks/useWidth";

type CartItemProps = {}

const CartItem = (props:CartItemProps) => {
    const {wideView} = useWidth(768);

    return (
        <Card className="view-cart-item mb-4">
            <div style={{height: "200px", width: "200px", backgroundColor: "red"}}>img</div>
            <Card.Body>
                <Card.Title>header here!</Card.Title>
                <p>info here!</p>
            </Card.Body>
        </Card>
    )
}

export default CartItem;