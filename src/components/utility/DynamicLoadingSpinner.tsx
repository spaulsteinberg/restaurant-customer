import { Spinner } from "react-bootstrap"

type DynamicLoadingSpinnerProps = {
    variant:string;
    size: "sm" | undefined
}

// element exists so container classes may be added to spinner
const DynamicLoadingSpinner = ({variant, size=undefined}:DynamicLoadingSpinnerProps) => {
    return (
        <div>
            <Spinner animation="border" size={size} variant={variant} />
        </div>
    )
}

DynamicLoadingSpinner.defaultProps = {
    size:undefined
}

export default DynamicLoadingSpinner
