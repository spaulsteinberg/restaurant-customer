import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useCheckout from '../../hooks/useCheckout';
import { resetCheckoutState } from '../../redux/checkout/checkoutActions';
import { emptyState } from '../../redux/cart/cartActions';
import LoadingAlert from '../../components/utility/LoadingAlert';
import OrderingMenu from '../../components/ordering/OrderingMenu';
import './order-styles.scss';

export const OrderPage = () => {

    const dispatch = useDispatch();
    const cartLoading = useSelector<RootState, boolean | undefined>(state => state.cart.loading)
    const userHasCompletedOrder = useCheckout();

    useEffect(() => {
        if (userHasCompletedOrder) {
            dispatch(resetCheckoutState())
            dispatch(emptyState())
        }
    }, [dispatch, userHasCompletedOrder]);

    return (
        <React.Fragment>
            {
                cartLoading ? <LoadingAlert classTypes="loading-cart-from-server-spinner mt-4 mx-4 text-center" /> : <OrderingMenu />
            }
        </React.Fragment>
    )
}

export default OrderPage;
