import Button from "react-bootstrap/Button"

type AddButtonProps = {
    bgColor: "success" | "info" | "secondary";
    children: string;
}

const AddButton = ({bgColor, children}:AddButtonProps) => {
    return (
        <Button variant={bgColor} className="w-100">{children}</Button>
    )
}

AddButton.defaultProps = {
    bgColor: "success"
}

export default AddButton
