import ILink from "../../models/home/ILink"

type ListFlexViewProps = {
    links: ILink[];
}
const ListFlexView = ({ links }: ListFlexViewProps) => {
    return (
        <div className="home-links-div">
            {links.map((link: ILink) => <div key={link.url} className="mb-2"><a href={link.url} target="_blank" rel="noreferrer">{link.display}</a></div>)}
        </div>
    )
}

export default ListFlexView
