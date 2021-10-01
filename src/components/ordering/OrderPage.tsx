import React from 'react'
import OrderMenuTitle from './OrderMenuTitle';
import './order-styles.scss';
import OrderItemContainer from './OrderItemContainer';
import ResponsiveContainer from '../utility/ResponsiveContainer';
import OrderItem from './OrderItem';

export const OrderPage = () => {
    const arr = [1, 2,3,4,5,6,7,8]
    return (
        <React.Fragment>
            <OrderMenuTitle title={"Menu Title"} />
            {/* <OrderItemContainer /> */}
            <ResponsiveContainer>
                {arr.map(item => <OrderItem key={item} />)}
            </ResponsiveContainer>
        </React.Fragment>
    )
}

export default OrderPage;
