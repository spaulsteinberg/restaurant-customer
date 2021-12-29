
type HomeDescriptionProps = {
    description: string | undefined
}
const HomeDescription = ({ description }: HomeDescriptionProps) => {
    return (
        <div className="home-description-display">
            { description }
        </div>
    )
}

export default HomeDescription
