import React, {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';

const initialState = {
    image: '',
};

const App = () => {
    const [app, setApp] = useState(initialState);

    const handleFormSubmit = (imageTag) => {
        setApp((prev)=>({...prev, image: imageTag}))
    };

    return (
        <main>
            <ToastContainer/>
            <Searchbar onSubmit={handleFormSubmit}/>
            <ImageGallery image={app.image}/>
        </main>
    );
};

export default App;
