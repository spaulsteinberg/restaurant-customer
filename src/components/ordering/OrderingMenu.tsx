import React from 'react'
import OrderMenuTitle from '../../components/ordering/OrderMenuTitle';
import ResponsiveContainer from '../../components/utility/ResponsiveContainer';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/utility/LoadingSpinner';
import { RootState } from '../../redux/store';
import Alert from 'react-bootstrap/Alert';
import OrderingDisplay from '../../components/ordering/OrderingDisplay';
import { IMenuContext, useMenuContext } from '../../contexts/MenuContext';

const OrderingMenu = () => {
    const menus = useMenuContext() as IMenuContext;
    const existingSelections = useSelector<RootState, string[]>(state => state.cart.allIds);
    const bids = useSelector<RootState, string[]>(state => state.cart.beverageIds);
    const fids = useSelector<RootState, string[]>(state => state.cart.foodIds);
    const orderState = useSelector<RootState, any>(state => state.cart.order);

    return (
        <>
            {
                menus.loading ? <LoadingSpinner variant="warning" className="text-center mt-5">Loading...</LoadingSpinner>
                    : menus.value && !menus.error ?
                        <React.Fragment>
                            <OrderMenuTitle title={menus.value.name} />
                            <ResponsiveContainer>
                                <OrderingDisplay
                                    menus={menus.value.menus}
                                    existingSelections={existingSelections}
                                    orderState={orderState}
                                    bids={bids}
                                    fids={fids} />
                            </ResponsiveContainer>
                        </React.Fragment>
                        : menus.error ? <Alert variant="danger" className="error-alert">{menus.error}</Alert>
                            : null
            }
        </>
    )
}

export default OrderingMenu
