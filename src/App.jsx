import {useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
    const [images, setImages] = useState([])
    const [searchTerm, setSearchTerm] = useState('moon')
    const defaultImageCount = 5

    function pullImages(search) {
        axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_KEY}&q=${search}&image_type=photo&per_page=${defaultImageCount}`).then(
            result => {
                setImages(
                    result.data.hits
                )
                console.log(result.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <h1>Pull Images From Pixabay</h1>
            <div className="card">
                <button onClick={() => pullImages(searchTerm)}>
                    Pull images
                </button>

                <ul>
                    {images.map((image) => (
                        <li key={image.id}> {image.id} - {image.pageURL} </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App
