import Alert from "react-bootstrap/Alert";

type NoCartItemsProps = {}

const NoCartItems = (props:NoCartItemsProps) => {
    return (
        <div className="no-items-cart mt-4">
            <Alert variant="info">No Items In Cart!</Alert>
        </div>
    )
}

export default NoCartItems;