import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import './cart-styles.scss'
import { ICartState } from "../../redux/cart/cartReducer"
import NoCartItems from "./NoCartItems"
import ShowCartItems from "./ShowCartItems"
import useCheckout from "../../hooks/useCheckout"
import { useEffect } from "react"
import { emptyState } from "../../redux/cart/cartActions"

type ViewCartProps = {}

const ViewCart = (props:ViewCartProps) => {
    const cart = useSelector<RootState, ICartState>(state => state.cart)
    const userHasCompletedOrder = useCheckout();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userHasCompletedOrder) {
            dispatch(emptyState())
        }
        // eslint-disable-next-line
    }, [dispatch])

    return (
        <div className="cart-container">
            { cart.count > 0 ? <ShowCartItems cart={cart} /> : <NoCartItems /> }
        </div>
    )
}

export default ViewCart
