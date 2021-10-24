import Card from "react-bootstrap/Card";
import CartCheckoutOrCancel from "./CartCheckoutOrCancel";
import { SyntheticEvent } from "react"
import { useDispatch } from "react-redux"
import { emptyState } from "../../redux/cart/cartActions"
import { useHistory } from "react-router";

type TotalFooterProps = {
    total:number;
    count:number;
}

const TotalFooter = (props:TotalFooterProps) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClearClick = (event:SyntheticEvent):void => {
        event.preventDefault();
        dispatch(emptyState())
    } 

    const handleCheckoutClick = () => {
        history.push("/cart/checkout")
    }

    return (
        <div className="view-cart-total-container">
            <div className="total-large">
                <Card>
                    <Card.Body>
                        Total is ({props.count} items): ${props.total.toFixed(2)} 
                    </Card.Body>
                </Card>
            </div>
            <CartCheckoutOrCancel onCancel={handleClearClick} onCheckout={handleCheckoutClick} />
        </div>
    )
}

export default TotalFooter;