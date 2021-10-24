import { ICartState } from "../../redux/cart/cartReducer"
import CartItemDisplay from "./CartItemDisplay"
import TotalFooter from "./TotalFooter"

type ShowCartItemsProps = {
    cart: ICartState
}

const ShowCartItems = ({cart}:ShowCartItemsProps) => {
    return (
        <>
            <CartItemDisplay cart={cart} />
            <TotalFooter total={cart.cartValue} count={cart.count}/>
        </>
    )
}

export default ShowCartItems
