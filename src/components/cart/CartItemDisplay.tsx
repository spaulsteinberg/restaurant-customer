import { ICartState } from "../../redux/cart/cartReducer"
import CartItem from "./CartItem"

type CartItemDisplayProps = {
    cart:ICartState
}

export const CartItemDisplay = ({cart}:CartItemDisplayProps) => {
    return (
        <div className="view-cart-item-container">
            {cart.foodIds.map(id => <CartItem key={id} data={cart.order.food[id]} />)}
            {cart.beverageIds.map(id => <CartItem key={id} data={cart.order.drink[id]} />)}
        </div>
    )
}

export default CartItemDisplay;