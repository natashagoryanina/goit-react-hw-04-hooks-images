import React, {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';

const App = () => {
    const [app, setApp] = useState('');

    const handleFormSubmit = (imageTag) => {
        setApp(imageTag);
    };

    return (
        <main>
            <ToastContainer/>
            <Searchbar onSubmit={handleFormSubmit}/>
            <ImageGallery image={app}/>
        </main>
    );
};

export default App;
