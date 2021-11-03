
type CheckoutFormItemFeedbackProps = {
    error:string|undefined;
    touched:boolean|undefined;
    hasTouchedProperty:boolean;
}
const CheckoutFormItemFeedback = ({error, touched, hasTouchedProperty}: CheckoutFormItemFeedbackProps) => {
    const body = hasTouchedProperty ? <small className="text-danger">{error && touched ? `*${error}` : null}</small>
        : <small className="text-danger">{error ? `*${error}` : null}</small>
    return (
        <div className="mx-2">
            {body}
        </div>
    )
}

export default CheckoutFormItemFeedback
