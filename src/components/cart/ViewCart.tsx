import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import './cart-styles.scss'
import { ICartState } from "../../redux/cart/cartReducer"
import NoCartItems from "./NoCartItems"
import ShowCartItems from "./ShowCartItems"

type ViewCartProps = {}

const ViewCart = (props:ViewCartProps) => {
    const cart = useSelector<RootState, ICartState>(state => state.cart)

    return (
        <div className="cart-container">
            { cart.count > 0 ? <ShowCartItems cart={cart} /> : <NoCartItems /> }
        </div>
    )
}

export default ViewCart
