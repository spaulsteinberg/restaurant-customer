import Card from "react-bootstrap/Card";
import CartCheckoutOrCancel from "./CartCheckoutOrCancel";
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { emptyState } from "../../redux/cart/cartActions"
//import { useHistory } from "react-router";
import ConfirmCancelModal from "./ConfirmCancelModal";
//import { processCheckout } from "../../redux/checkout/checkoutActions";
import CheckoutModal from '../checkout/CheckoutModal'

type TotalFooterProps = {
    total:number;
    count:number;
}

const TotalFooter = (props:TotalFooterProps) => {
    const dispatch = useDispatch();
//    const history = useHistory();
    const [showCancelModal, setShowCancelModal] = useState(false)
    const [showCheckoutModal, setShowCheckoutModal] = useState(false)

    const handleClearClick = (event:SyntheticEvent):void => {
        event.preventDefault();
        setShowCancelModal(true)
    } 

    const handleCheckoutClick = async () => {
     //   dispatch(processCheckout({firstName: "Samuel", lastName: "Steinberg", email: "s@gmail.com", credit: "12345678910111213"}))
     //   history.push("/cart/checkout")
        setShowCheckoutModal(true)
    }

    const handleCheckoutClose = () => {
        setShowCheckoutModal(false)
    }

    const handleClearConfirm = () => {
        dispatch(emptyState())
        setShowCancelModal(false)
    }

    const handleClearCancel = () => {
        setShowCancelModal(false)
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
            <ConfirmCancelModal show={showCancelModal} handleConfirm={handleClearConfirm} handleCancel={handleClearCancel} />
            <CheckoutModal show={showCheckoutModal} handleCancel={handleCheckoutClose} />
        </div>
    )
}

export default TotalFooter;