import AddButton from '../utility/AddButton';
import PlusMinusButtons from '../utility/PlusMinusButtons';
import DynamicLoadingSpinner from '../utility/DynamicLoadingSpinner';

type OrderItemButtonsProps = {
    showAddItem:boolean;
    count:number;
    isLoading:boolean;
    loadType:number
    error:string;
    add: () => void;
    inc: () => void;
    dec: () => void;
}

const OrderItemButtons = ({showAddItem, count, isLoading, loadType, error, add, inc, dec}:OrderItemButtonsProps) => {
    return (
        <div className={showAddItem ? "button-container" : "expanded-container"}>
            { 
                isLoading ? <DynamicLoadingSpinner variant={ loadType === 1 ? "primary" : "danger"} />
                :
                showAddItem ? 
                    <AddButton bgColor={"success"} onClick={add}>Add</AddButton> 
                    : <PlusMinusButtons inc={inc} dec={dec} count={count}/>}
        </div>
    )
}

export default OrderItemButtons;