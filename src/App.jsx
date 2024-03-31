import './App.css'
import ImageGrid from "./components/ImageGrid";
import ImageDetail from "./components/ImageDetail.jsx";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/detail/:id" element={<ImageDetail/>}/>
                    <Route path="/" element={<ImageGrid/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
