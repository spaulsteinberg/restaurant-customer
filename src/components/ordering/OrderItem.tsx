import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { IItems } from '../../models/firebaseMenuResponse';
import { decrementCartCount, incrementCartCount } from '../../redux/cart/cartActions';
import logo from './istockphoto-1157515115-612x612.jpg'
import OrderItemButtons from './OrderItemButtons';
import OrderItemInfoCard from './OrderItemCardInfo';

type OrderItemProps = {
    item:IItems;
}

const OrderItem = ({item}:OrderItemProps) => {

    const dispatch = useDispatch();

    const [showAddItem, setShowAddItem] = useState<boolean>(true);
    const [count, setCount] = useState<number>(1);

    const handleShowAddItemClick = () => {
        dispatch(incrementCartCount())        
        setShowAddItem(false)
    }

    const handleIncrementClick = () => {
        setCount(prev => prev + 1);
        dispatch(incrementCartCount())
    }

    const handleDecrementClick = () => {
        dispatch(decrementCartCount())
        if (count === 1) 
            setShowAddItem(true);
        else 
            setCount(prev => prev - 1)
    }

    return (
        <Card className="order-item">
            <OrderItemInfoCard photo={logo} name={item.item} description={item.description} price={item.price} />
            <OrderItemButtons 
                showAddItem={showAddItem}
                add={handleShowAddItemClick}
                inc={handleIncrementClick} 
                dec={handleDecrementClick} 
                count={count} 
                />
        </Card>
    )
}

export default OrderItem
