import { ChangeEvent, FocusEvent } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import CheckoutFormItemFeedback from "./CheckoutFormItemFeedback";

type CheckoutFormItemProps = {
    labelText:string;
    error:string|undefined;
    touched:boolean|undefined;
    name:string;
    id:string;
    type:string;
    value:any;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e:FocusEvent<any>) => void;
}

const CheckoutFormItem = ({labelText, error, touched, ...rest}:CheckoutFormItemProps) => {
    return (
        <FormGroup className="checkout-cart-form-item">
            <Form.Label>{labelText}</Form.Label>
            <FormControl {...rest} className={error && touched ? "form-control-error" : "form-control"}/>
            <CheckoutFormItemFeedback error={error} touched={touched} hasTouchedProperty/>
        </FormGroup>
    )
}

export default CheckoutFormItem
