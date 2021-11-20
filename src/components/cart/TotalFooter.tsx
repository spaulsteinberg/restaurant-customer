import Card from "react-bootstrap/Card";
import CartCheckoutOrCancel from "./CartCheckoutOrCancel";
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { emptyState } from "../../redux/cart/cartActions"
//import { useHistory } from "react-router";
import ConfirmCancelModal from "./ConfirmCancelModal";
import CheckoutModal from '../checkout/CheckoutModal'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ICheckoutState } from "../../redux/checkout/checkoutReducer";

type TotalFooterProps = {
    total:number;
    count:number;
}

const TotalFooter = (props:TotalFooterProps) => {

    const dispatch = useDispatch();
    const checkoutState = useSelector<RootState, ICheckoutState>(state => state.checkout)

    const [showCancelModal, setShowCancelModal] = useState(false)
    const [showCheckoutModal, setShowCheckoutModal] = useState(false)

    const handleClearClick = (event:SyntheticEvent):void => {
        event.preventDefault();
        setShowCancelModal(true)
    } 

    const handleCheckoutClick = async () => {
        setShowCheckoutModal(true)
    }

    const handleCheckoutClose = () => {
        if(checkoutState.loading) return
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
            <CheckoutModal show={showCheckoutModal} handleCancel={handleCheckoutClose} hasCompletedOrder={checkoutState.hasCompletedOrder} amount={props.total.toFixed(2)}/>
        </div>
    )
}

export default TotalFooter;