
type CheckoutFormItemFeedbackProps = {
    error:string|undefined;
    touched:boolean|undefined;
}
const CheckoutFormItemFeedback = ({error, touched}: CheckoutFormItemFeedbackProps) => {
    return (
        <div className="mx-2">
            <small className="text-danger">{error && touched ? `*${error}` : null}</small>
        </div>
    )
}

export default CheckoutFormItemFeedback
