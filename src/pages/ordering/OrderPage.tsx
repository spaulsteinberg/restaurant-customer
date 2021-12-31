import React, { useEffect } from 'react'
import OrderMenuTitle from '../../components/ordering/OrderMenuTitle';
import './order-styles.scss';
import ResponsiveContainer from '../../components/utility/ResponsiveContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMenu } from '../../redux/menu/menuActions';
import LoadingSpinner from '../../components/utility/LoadingSpinner';
import { RootState } from '../../redux/store';
import { IMenuState } from '../../redux/menu/menuReducer';
import Alert from 'react-bootstrap/Alert';
import useCheckout from '../../hooks/useCheckout';
import { resetCheckoutState } from '../../redux/checkout/checkoutActions';
import { emptyState } from '../../redux/cart/cartActions';
import OrderingDisplay from '../../components/ordering/OrderingDisplay';
import LoadingAlert from '../../components/utility/LoadingAlert';

export const OrderPage = () => {

    const dispatch = useDispatch();
    const menuState = useSelector<RootState, IMenuState>(state => state.menu);
    const existingSelections = useSelector<RootState, string[]>(state => state.cart.allIds);
    const bids = useSelector<RootState, string[]>(state => state.cart.beverageIds);
    const fids = useSelector<RootState, string[]>(state => state.cart.foodIds);
    const orderState = useSelector<RootState, any>(state => state.cart.order);
    const cartLoading = useSelector<RootState, boolean | undefined>(state => state.cart.loading)
    const userHasCompletedOrder = useCheckout();

    useEffect(() => {
        if (userHasCompletedOrder) {
            dispatch(resetCheckoutState())
            dispatch(emptyState())
        }
        dispatch(getCurrentMenu())
    }, [dispatch, userHasCompletedOrder]);

    return (
        <React.Fragment>
            {
                cartLoading ? <LoadingAlert classTypes="loading-cart-from-server-spinner mt-4 mx-4 text-center" /> :
                    menuState.loading ? <LoadingSpinner variant="warning" className="text-center mt-5">Loading...</LoadingSpinner>
                        : menuState.data && !menuState.error ?
                            <React.Fragment>
                                <OrderMenuTitle title={menuState.data.name} />
                                <ResponsiveContainer>
                                    <OrderingDisplay
                                        menus={menuState.data.menus}
                                        existingSelections={existingSelections}
                                        orderState={orderState}
                                        bids={bids}
                                        fids={fids} />
                                </ResponsiveContainer>
                            </React.Fragment>
                            : menuState.error ? <Alert variant="danger" className="error-alert">{menuState.error}</Alert>
                                : null
            }
        </React.Fragment>
    )
}

export default OrderPage;
