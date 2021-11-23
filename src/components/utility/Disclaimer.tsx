
type DisclaimerProps = {
    children:string;
    variant?: "primary" | "secondary" | "warning" |"danger";
    display?:string;
}

const Disclaimer = ({children, display = "receipt-disclaimer", variant = "primary"}:DisclaimerProps) => {
    return (
        <div className={`text-${variant} ${display}`}>
            <small>{children}</small>
        </div>
    )
}

export default Disclaimer
