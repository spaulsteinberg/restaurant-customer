import React from "react"
import Button from "react-bootstrap/Button"

type AddButtonProps = {
    bgColor: "success" | "info" | "secondary";
    children: string;
    onClick: React.MouseEventHandler
}

const AddButton = ({bgColor, children, ...rest}:AddButtonProps) => {
    return (
        <Button variant={bgColor} className="w-100" {...rest}>{children}</Button>
    )
}

AddButton.defaultProps = {
    bgColor: "success"
}

export default AddButton
