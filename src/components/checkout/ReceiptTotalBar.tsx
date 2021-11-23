
type ReceiptTotalBarProps = {
    total:number;
}
const ReceiptTotalBar = (props:ReceiptTotalBarProps) => {
    return (
        <div className="full-width-container receipt-footer">
            <hr />
            {`$${props.total}`}
        </div>
    )
}

export default ReceiptTotalBar
