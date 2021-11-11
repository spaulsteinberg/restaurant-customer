import Card from "react-bootstrap/Card";
import useWidth from "../../hooks/useWidth";
import CartItemBody from './CartItemBody';

type CartItemProps = {
    data:any
}

const CartItem = ({data}:CartItemProps) => {
    const {wideView} = useWidth(768);
    
    return (
        <Card className="view-cart-item mb-4 mr-4" style={{flexDirection: wideView ? "row" : "column"}}>
            {data.imageAddress ? <img src={data.imageAddress} alt="item" /> : <div style={{height: "200px", width: "200px", backgroundColor: "gray"}}>img</div>}
            <Card.Body>
                <CartItemBody data={data} />
            </Card.Body>
        </Card>
    )
}

export default CartItem;