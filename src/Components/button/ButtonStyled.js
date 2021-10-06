import styled from 'styled-components';

export const ButtonContainer = styled.div`
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        padding: 6px 14px;
        height: 40px;
        width: 120px;
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
        border-radius: 6px;
        color: #fff;
        background: #012ce7;
        border: none;
        box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);

        &:focus {
            box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
            outline: 0;
        }
    }
`;