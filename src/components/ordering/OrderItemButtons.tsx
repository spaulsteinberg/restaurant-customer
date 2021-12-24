import AddButton from '../utility/AddButton';
import PlusMinusButtons from '../utility/PlusMinusButtons';
import DynamicLoadingSpinner from '../utility/DynamicLoadingSpinner';
import OrderItemFooterContainer from './OrderItemFooterContainer';
import useMessageTimeout from '../../hooks/useMessageTimeout';

type OrderItemButtonsProps = {
    showAddItem:boolean;
    count:number;
    isLoading:boolean;
    error:string;
    loadType:number;
    add: () => void;
    inc: () => void;
    dec: () => void;
}

const OrderItemButtons = ({showAddItem, count, isLoading, error, loadType, add, inc, dec}:OrderItemButtonsProps) => {

    const visible = useMessageTimeout(error, 3500)

    return (
        <OrderItemFooterContainer classDeterminate={showAddItem}>
            { 
                isLoading ? <DynamicLoadingSpinner variant={ loadType === 1 ? "primary" : "danger"} />
                :
                error && visible ? <p className="order-request-error text-danger text-center">{error}</p> :
                showAddItem ? 
                    <AddButton bgColor={"success"} onClick={add}>Add</AddButton> 
                    : <PlusMinusButtons inc={inc} dec={dec} count={count}/>
            }
        </OrderItemFooterContainer>
    )
}

export default OrderItemButtons;