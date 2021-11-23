import Modal from 'react-bootstrap/Modal'
import CheckoutModalReceipt from './CheckoutModalReceipt'

type CheckoutModalCompletionProps = {}
const CheckoutModalCompletion = (props:CheckoutModalCompletionProps) => {
    return (
        <Modal.Body>
            <CheckoutModalReceipt />
        </Modal.Body>
    )
}

export default CheckoutModalCompletion
