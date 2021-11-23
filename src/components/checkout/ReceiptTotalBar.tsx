
type ReceiptTotalBarProps = {
    total:number;
}
const ReceiptTotalBar = (props:ReceiptTotalBarProps) => {
    return (
        <div className="full-width-container receipt-footer">
            <hr />
            {`$${props.total.toFixed(2)}`}
        </div>
    )
}

export default ReceiptTotalBar
