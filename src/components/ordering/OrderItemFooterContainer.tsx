
type OrderItemFooterContainerProps = {
    classDeterminate:boolean;
    children:any
}
const OrderItemFooterContainer = ({classDeterminate, children}:OrderItemFooterContainerProps) => {
    return (
        <div className={classDeterminate ? "button-container" : "expanded-container"}>
            { children }
        </div>
    )
}

export default OrderItemFooterContainer
