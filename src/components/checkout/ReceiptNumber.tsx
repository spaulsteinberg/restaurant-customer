
type ReceiptNumberProps = {
    receipt:string;
}
const ReceiptNumber = ({receipt}:ReceiptNumberProps) => {
    return (
        <div className="full-width-container centered-text">
            Reference: {receipt ? receipt : "See emailed receipt."}
        </div>
    )
}

export default ReceiptNumber
