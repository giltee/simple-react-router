import { Link } from "react-router-dom";
import Nav from "../components/nav";
import data from "../data/data.json"

export default function Root() {
    return(
        <div>
            <h1>Products</h1>
            <Nav/>
        </div>
    )
}