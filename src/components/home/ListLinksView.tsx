import ILink from "../../models/home/ILink"

type ListLinksViewProps = {
    links: ILink[];
}
const ListLinksView = ({ links }: ListLinksViewProps) => {
    return (
        <div className="home-links-list">
            <ul>
                {
                    links.map((link: ILink) => <li key={link.url} className="mb-2"><a href={link.url} target="_blank" rel="noreferrer">{link.display}</a></li>)
                }
            </ul>
        </div>
    )
}

export default ListLinksView
