
type ResponsiveContainerProps = {
    children: React.ReactNode
}

const ResponsiveContainer = (props: ResponsiveContainerProps) => {
    return (
        <div className="item-container">
            {props.children}
        </div>
    )
}

export default ResponsiveContainer
