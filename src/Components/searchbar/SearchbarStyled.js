import styled from 'styled-components';

export const SearchbarContainer = styled.header`
    .SearchForm {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
        width: 100%;
        height: 60px;
        background-color: #6598db;
        border-radius: 3px;
        overflow: hidden;
    }

    .SearchForm-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10px;
        padding: 6px 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
        border-radius: 6px;
        color: #3D3D3D;
        background: #fff;
        border: none;
        box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);

        &:focus {
            box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
            outline: 0;
        }
    }

    .SearchForm-input {
        display: inline-block;
        width: 280px;
        font: inherit;
        font-size: 20px;
        border: none;
        border-radius: 6px;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
    }

    .SearchForm-input::placeholder {
        font: inherit;
        font-size: 18px;
    }
`; 