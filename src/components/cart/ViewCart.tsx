import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import CartItem from "./CartItem"
import './cart-styles.scss'
import TotalFooter from "./TotalFooter"
import { ICartState } from "../../redux/cart/cartReducer"

type ViewCartProps = {}

const ViewCart = (props:ViewCartProps) => {
    const cart = useSelector<RootState, ICartState>(state => state.cart)
    return (
        <div className="view-cart-item-container p-4">
            {cart.foodIds.map(id => <CartItem key={id} data={cart.order.food[id]} />)}
            {cart.beverageIds.map(id => <CartItem key={id} data={cart.order.drink[id]} />)}
            <TotalFooter total={cart.cartValue} />
        </div>
    )
}

export default ViewCart
