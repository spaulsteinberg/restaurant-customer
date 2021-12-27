import INameDisplay from "../../models/home/INameDisplay"

type HomeTitleProps = {
    name: INameDisplay
}
const HomeTitle = ({ name }: HomeTitleProps) => {
    return (
        <div id="restaurant-name">
            <h1 className={`text-${name.color} height-${name.height} weight-${name.weight} font-${name.font}`}>
                {name.display}
            </h1>
        </div>
    )
}

export default HomeTitle
