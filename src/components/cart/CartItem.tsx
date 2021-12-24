import Card from "react-bootstrap/Card";
import useWidth from "../../hooks/useWidth";
import CartImage from "./CartImage";
import CartItemBody from './CartItemBody';

type CartItemProps = {
    data: any
}

const CartItem = ({ data }: CartItemProps) => {
    const { wideView } = useWidth(500);
    return (
        <Card className="view-cart-item mb-4 mr-4" style={{ flexDirection: wideView ? "row" : "column" }}>
            <CartImage imgAddress={data.imageAddress} />
            <Card.Body>
                <CartItemBody data={data} />
            </Card.Body>
        </Card>
    )
}

export default CartItem;