import React, {useState} from 'react';
import { toast } from 'react-toastify';
import {SearchbarContainer} from './SearchbarStyled';

const initialState = { 
    imageTag: ''
};

const Searchbar = ({onSubmit}) => {
    const [searchbar, setSearchbar] = useState(initialState);

    const handleNameChange = (e) => {
        setSearchbar({imageTag: e.currentTarget.value.toLowerCase() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchbar.imageTag.trim() === '') {
            toast.error('Enter an image tag, please.');
            return;
        };
        onSubmit(searchbar.imageTag);
        setSearchbar({imageTag: ''});
    };

    return (
        <SearchbarContainer>
            <form className="SearchForm" onSubmit={handleSubmit}>
                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name = "imageTag"
                    value={searchbar.imageTag}
                    onChange={handleNameChange}
                />
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
            </form>
        </SearchbarContainer>
    );
}

export default Searchbar;

