
type ShowErrorMessageProps = {
    error:string
}

const ShowErrorMessage = ({error}:ShowErrorMessageProps) => {
    return <p className="text-danger error-req-p">{error}</p>
}

export default ShowErrorMessage
