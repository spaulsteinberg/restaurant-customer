import Card from "react-bootstrap/Card";

type TotalFooterProps = {
    total:number;
    count:number;
}

const TotalFooter = (props:TotalFooterProps) => {
    return (
        <div className="view-cart-total-container">
            <div className="total-large">
                <Card>
                    <Card.Body>
                        Total is ({props.count} items): ${props.total.toFixed(2)} 
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default TotalFooter;