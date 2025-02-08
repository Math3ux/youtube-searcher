import { useState } from "react"

import { SearchBar } from "../Components/SeacherBar"
import { Title } from "../Components/Title"
import { Results } from "../Components/Results"


export const MainPage = () => {
    const [term, setTerm] = useState('')

    return (
        <div>
            <Title/>
            <SearchBar term={term} setTerm={setTerm}/>
            <Results term={term}/>
        </div>
    )
}
