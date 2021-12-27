import IGotoRoute from "./IGotoRoute";
import ILink from "./ILink";
import INameDisplay from "./INameDisplay";

interface IHome {
    bpAddress:string;
    description:string;
    gotos:IGotoRoute[];
    links:ILink[];
    name:INameDisplay;
}

export default IHome;