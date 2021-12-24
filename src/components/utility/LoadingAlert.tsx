import { Alert } from "react-bootstrap"
import LoadingSpinner from "./LoadingSpinner"

type LoadingAlertProps = {
    classTypes: string
}

const LoadingAlert = (props: LoadingAlertProps) => {
    return (
        <div className="loading-cart-from-server-container">
            <Alert variant="primary" className={props.classTypes}>
                <p>Checking for cart and searching for cookies...</p>
                <LoadingSpinner variant="primary"> </LoadingSpinner>
            </Alert>
        </div>
    )
}

export default LoadingAlert
