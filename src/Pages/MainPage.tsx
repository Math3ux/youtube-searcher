import { useState } from "react"

import { SearchBar } from "../Components/SeacherBar"
import { Title } from "../Components/Title"
import { Results } from "../Components/Results"


export const MainPage = () => {
    const [term, setTerm] = useState('')

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto px-4 py-4 flex flex-col items-center">
                <Title/>
                <SearchBar term={term} setTerm={setTerm}/>
            </div>
            <div className="pt-32 container mx-auto px-4 flex-grow">
                <Results term={term}/>
            </div>
        </div>
    )
}
