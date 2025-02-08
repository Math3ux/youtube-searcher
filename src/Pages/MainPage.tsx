import { SearchBar } from "../Components/SeacherBar"
import { Title } from "../Components/Title"
import { Results } from "../Components/Results"


export const MainPage = () => {
    return (
        <div>
            <Title/>
            <SearchBar/>
            <Results/>
        </div>
    )
}
