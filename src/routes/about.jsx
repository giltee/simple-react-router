import { Link } from "react-router-dom";
import Nav from "../components/nav";
import data from '../data/data.json';
import { useState } from "react";

export default function Root() {

    // our language state, set english as the default 
    const [lang, setLang] = useState(data.en)

    return(
        <div>
            <h1>About</h1>
            <Nav/>
            {/* list the values of the current language */}
            {
                lang.map((person => <div key={person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.title}</p>
                </div>))
            }
            {/* on change set the new language */}
            <select onChange={(e) => setLang(data[e.currentTarget.value])}>
                {
                    /* map the languages to the select list */
                    Object.keys(data).map(lang => <option val={lang}>{lang}</option>)
                }
            </select>
        </div>
    )
}