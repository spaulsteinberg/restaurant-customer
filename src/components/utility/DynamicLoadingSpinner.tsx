import { Spinner } from "react-bootstrap"

type DynamicLoadingSpinnerProps = {
    variant:string;
    containerClasses:string;
    size: "sm" | undefined
}

// element exists so container classes may be added to spinner
const DynamicLoadingSpinner = ({variant, containerClasses, size}:DynamicLoadingSpinnerProps) => {
    return (
        <div className={containerClasses}>
            <Spinner animation="border" size={size} variant={variant} />
        </div>
    )
}

DynamicLoadingSpinner.defaultProps = {
    containerClasses: null,
    size:undefined
}

export default DynamicLoadingSpinner
