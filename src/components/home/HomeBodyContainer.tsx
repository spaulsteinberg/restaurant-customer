
type HomeBodyContainerProps = {
    children:any
}
const HomeBodyContainer = ({children}: HomeBodyContainerProps) => {
    return (
        <div className="home-input-container body-text">
            { children }
        </div>
    )
}

export default HomeBodyContainer
