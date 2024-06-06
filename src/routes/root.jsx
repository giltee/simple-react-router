import { Link, json } from "react-router-dom";
import Nav from "../components/nav";
import data from "../data/data.json"

export default function Root() {

    return(
        <div>
            <h1>Hello World</h1>
            <Nav/>
        </div>
    )
}