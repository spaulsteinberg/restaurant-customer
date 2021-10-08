import React from "react"
import Spinner from "react-bootstrap/Spinner"

type LoadingSpinnerProps = {
    variant: "primary" | "success" | "secondary" | "danger" | "info" | "warning",
    children: string,
    [x:string]: any,
}

const LoadingSpinner = ({variant, children, ...rest}:LoadingSpinnerProps) => {
    return (
        <div {...rest}>
            <Spinner animation="border" variant={variant} />
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}


LoadingSpinner.defaultProps = {
    variant: "primary",
}

export default LoadingSpinner;
