
type ReceiptDateBarProps = {
    date:string;
}
const ReceiptDateBar = ({date}:ReceiptDateBarProps) => {
    return (
        <div className="full-width-container mb-4">
            Order Time: {date ? `${new Date(date).toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST` : "See emailed receipt."}
        </div>
    )
}

export default ReceiptDateBar
