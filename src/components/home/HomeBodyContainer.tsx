
type HomeBodyContainerProps = {
    children:any
}
const HomeBodyContainer = ({children}: HomeBodyContainerProps) => {
    return (
        <div className="home-input-container">
            { children }
        </div>
    )
}

export default HomeBodyContainer
