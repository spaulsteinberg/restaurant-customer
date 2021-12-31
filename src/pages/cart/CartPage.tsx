import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import NoCartItems from "../../components/cart/NoCartItems"
import ShowCartItems from "../../components/cart/ShowCartItems"
import useCheckout from "../../hooks/useCheckout"
import { useEffect } from "react"
import { emptyState } from "../../redux/cart/cartActions"
import LoadingAlert from "../../components/utility/LoadingAlert"
import './cart-styles.scss'

type CartPageProps = {}

const CartPage = (props:CartPageProps) => {
    const numItems = useSelector<RootState, number>(state => state.cart.count)
    const cartLoading = useSelector<RootState, boolean|undefined>(state => state.cart.loading)
    const userHasCompletedOrder = useCheckout();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userHasCompletedOrder) {
            dispatch(emptyState())
        }
        // eslint-disable-next-line
    }, [dispatch])

    return (
        <div className={cartLoading ? "justify-content-center" : "cart-container"}>
            {
                cartLoading ? 
                    <LoadingAlert classTypes="loading-cart-from-server-spinner mt-4 mx-4 text-center"/> : 
                    numItems > 0 ? 
                        <ShowCartItems /> 
                        : <NoCartItems /> 
            }
        </div>
    )
}

export default CartPage
