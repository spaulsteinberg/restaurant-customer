
type ReceiptCardBarProps = {
    card:string|undefined
}
const ReceiptCardBar = ({card}: ReceiptCardBarProps) => {
    return (
        <div className="full-width-container centered-text">
            Card: {card ? card : "See emailed receipt."}
        </div>
    )
}

export default ReceiptCardBar
