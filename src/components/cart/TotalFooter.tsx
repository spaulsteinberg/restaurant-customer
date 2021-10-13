
type TotalFooterProps = {
    total:number
}

const TotalFooter = (props:TotalFooterProps) => {
    return (
        <div className="total-large"> total is: ${props.total.toFixed(2)} </div>
    )
}

export default TotalFooter;