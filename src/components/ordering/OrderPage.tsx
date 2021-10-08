import React, { useEffect } from 'react'
import OrderMenuTitle from './OrderMenuTitle';
import './order-styles.scss';
import ResponsiveContainer from '../utility/ResponsiveContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMenu } from '../../redux/menu/menuActions';
import LoadingSpinner from '../utility/LoadingSpinner';
import { RootState } from '../../redux/store';
import { IMenuState } from '../../redux/menu/menuReducer';
import { Alert } from 'react-bootstrap';
import OrderSection from './OrderSection';

export const OrderPage = () => {

    const dispatch = useDispatch();
    const menuState = useSelector<RootState, IMenuState>(state => state.menu);

    useEffect(() => {
        dispatch(getCurrentMenu())
    }, [dispatch]);

    return (
        <React.Fragment>
            {
                menuState.loading ? <LoadingSpinner variant="warning" className="text-center mt-5">Loading...</LoadingSpinner>
                : menuState.data && !menuState.error ? 
                    <React.Fragment>
                        <OrderMenuTitle title={menuState.data.name} />
                        <ResponsiveContainer>
                            {menuState.data.menus.map(section => <OrderSection key={section.menuName} section={section} />)}
                        </ResponsiveContainer>
                    </React.Fragment>
                : menuState.error ? <Alert variant="danger" className="error-alert">{menuState.error}</Alert>
                : null
            }
        </React.Fragment>
    )
}

export default OrderPage;
