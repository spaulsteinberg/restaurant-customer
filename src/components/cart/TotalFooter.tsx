import Card from "react-bootstrap/Card";
import CartCheckoutOrCancel from "./CartCheckoutOrCancel";
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { emptyState } from "../../redux/cart/cartActions"
import { useHistory } from "react-router";
import ConfirmCancelModal from "./ConfirmCancelModal";
import { processCheckout } from "../../redux/checkout/checkoutActions";

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

    

    const handleCheckoutClick = async () => {
        dispatch(processCheckout({firstName: "Samuel", lastName: "Steinberg", email: "s@gmail.com", credit: "12345678910111213"}))
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