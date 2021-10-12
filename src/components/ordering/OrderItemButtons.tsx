import AddButton from '../utility/AddButton';
import PlusMinusButtons from '../utility/PlusMinusButtons';

type OrderItemButtonsProps = {
    showAddItem:boolean;
    count:number;
    add: () => void;
    inc: () => void;
    dec: () => void;
}

const OrderItemButtons = ({showAddItem, count, add, inc, dec}:OrderItemButtonsProps) => {

    

    return (
        <div className={showAddItem ? "button-container" : "expanded-container"}>
            { showAddItem ? <AddButton bgColor={"success"} onClick={add}>Add</AddButton> 
                : <PlusMinusButtons inc={inc} dec={dec} count={count}/>}
        </div>
    )
}

export default OrderItemButtons;