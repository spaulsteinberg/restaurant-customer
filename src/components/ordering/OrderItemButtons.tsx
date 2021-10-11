import AddButton from '../utility/AddButton';

type OrderItemButtonsProps = {}

const OrderItemButtons = (props:OrderItemButtonsProps) => {
    return (
        <div className="button-container">
            <AddButton bgColor={"success"}>Add</AddButton>
        </div>
    )
}

export default OrderItemButtons;