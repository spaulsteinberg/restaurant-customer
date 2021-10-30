import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

type ConfirmCancelModalProps = {
    show:boolean,
    handleConfirm: () => void,
    handleCancel: () => void
}
const ConfirmCancelModal = ({show, handleConfirm, handleCancel}:ConfirmCancelModalProps) => {
    return (
        <Modal show={show} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to drop your cart?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-danger">Note that this cannot be undone.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleConfirm}>Yes</Button>
                <Button variant="primary" onClick={handleCancel}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmCancelModal
