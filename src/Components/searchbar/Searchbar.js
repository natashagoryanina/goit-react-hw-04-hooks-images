import React, {useState} from 'react';
import { toast } from 'react-toastify';
import {SearchbarContainer} from './SearchbarStyled';

// const initialState = { 
//     imageTag: ''
// };

const Searchbar = ({onSubmit}) => {
    const [searchbar, setSearchbar] = useState('');

    const handleNameChange = (e) => {
        setSearchbar(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchbar.trim() === '') {
            toast.error('Enter an image tag, please.');
            return;
        };
        onSubmit(searchbar);
        setSearchbar('');
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
                    value={searchbar}
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

