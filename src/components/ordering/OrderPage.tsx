import React, { useEffect } from 'react'
import OrderMenuTitle from './OrderMenuTitle';
import './order-styles.scss';
import ResponsiveContainer from '../utility/ResponsiveContainer';
import OrderItem from './OrderItem';
import { useDispatch } from 'react-redux';
import { getCurrentMenu } from '../../redux/menu/menuActions';

export const OrderPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentMenu())
    }, [dispatch]);

    const arr:number[] = [1, 2,3,4,5,6,7,8]
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
