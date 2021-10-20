import { SyntheticEvent } from "react"
import { useDispatch } from "react-redux"
import { emptyState } from "../../redux/cart/cartActions"
import { ICartState } from "../../redux/cart/cartReducer"
import AddButton from "../utility/AddButton"
import CartItemDisplay from "./CartItemDisplay"
import TotalFooter from "./TotalFooter"

type ShowCartItemsProps = {
    cart: ICartState
}

const ShowCartItems = ({cart}:ShowCartItemsProps) => {
    const dispatch = useDispatch()
    const handleClearOrder = (event:SyntheticEvent) => {
        event.preventDefault();
        dispatch(emptyState())
    } 
    return (
        <>
            <CartItemDisplay cart={cart} />
            <TotalFooter total={cart.cartValue} />

            {/* This is a placeholder for testing*/}
            <AddButton bgColor="success" onClick={handleClearOrder}>Reset</AddButton>
        </>
    )
}

export default ShowCartItems
