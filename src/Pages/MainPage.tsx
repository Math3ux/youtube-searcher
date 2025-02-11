import { useState } from "react"

import { SearchBar } from "../Components/SeacherBar"
import { Title } from "../Components/Title"
import { Results } from "../Components/Results"


export const MainPage = () => {
    const [term, setTerm] = useState('')

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex flex-col items-center">
                    <Title/>
                    <SearchBar term={term} setTerm={setTerm}/>
                </div>
            </div>
            <div className="pt-32 container mx-auto px-4 flex-grow">
                <Results term={term}/>
            </div>
        </div>
    )
}
