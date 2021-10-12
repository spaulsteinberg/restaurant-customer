import React, { useState } from 'react';
import AddButton from '../utility/AddButton';
import PlusMinusButtons from '../utility/PlusMinusButtons';

type OrderItemButtonsProps = {}

const OrderItemButtons = (props:OrderItemButtonsProps) => {

    const [showAddItem, setShowAddItem] = useState<boolean>(true);
    const [count, setCount] = useState<number>(1);

    const handleShowAddItemClick = () => {
        console.log("clicked")
        setShowAddItem(false)
    }

    const handleIncrementClick = () => setCount(prev => prev + 1);
    const handleDecrementClick = () => {
        if (count === 1) 
            setShowAddItem(true);
        else 
            setCount(prev => prev - 1)
    }

    return (
        <div className={showAddItem ? "button-container" : "expanded-container"}>
            { showAddItem ? <AddButton bgColor={"success"} onClick={handleShowAddItemClick}>Add</AddButton> 
                : <PlusMinusButtons inc={handleIncrementClick} dec={handleDecrementClick} count={count}/>}
        </div>
    )
}

export default OrderItemButtons;