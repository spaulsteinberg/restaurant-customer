import Card from "react-bootstrap/Card";
import CartCheckoutOrCancel from "./CartCheckoutOrCancel";
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { emptyState } from "../../redux/cart/cartActions"
import { useHistory } from "react-router";
import ConfirmCancelModal from "./ConfirmCancelModal";

type TotalFooterProps = {
    total:number;
    count:number;
}

const TotalFooter = (props:TotalFooterProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false)

    const handleClearClick = (event:SyntheticEvent):void => {
        event.preventDefault();
        setShowModal(true)
    } 

    const handleCheckoutClick = () => {
        history.push("/cart/checkout")
    }

    const handleClearConfirm = () => {
        dispatch(emptyState())
        setShowModal(false)
    }

    const handleClearCancel = () => {
        setShowModal(false)
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
            <ConfirmCancelModal show={showModal} handleConfirm={handleClearConfirm} handleCancel={handleClearCancel} />
        </div>
    )
}

export default TotalFooter;