import { useSelector } from "react-redux"
import { ICartState } from "../../redux/cart/cartReducer"
import { RootState } from "../../redux/store"
import CartItemDisplay from "./CartItemDisplay"
import TotalFooter from "./TotalFooter"

const ShowCartItems = () => {
    const cart = useSelector<RootState, ICartState>(state => state.cart)
    return (
        <>
            <CartItemDisplay cart={cart} />
            <TotalFooter total={cart.cartValue} count={cart.count}/>
        </>
    )
}

export default ShowCartItems
