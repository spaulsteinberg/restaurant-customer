import { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";

type CheckoutFormItemProps = {
    labelText:string;
    name:string;
    id:string;
    type:string;
    value:any;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const CheckoutFormItem = ({labelText, ...rest}:CheckoutFormItemProps) => {
    return (
        <FormGroup className="checkout-cart-form-item">
            <Form.Label>{labelText}</Form.Label>
            <FormControl {...rest} />
        </FormGroup>
    )
}

export default CheckoutFormItem
