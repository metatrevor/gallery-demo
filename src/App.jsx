import './App.css'
import ImageGrid from "./components/ImageGrid";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ImageGrid/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
