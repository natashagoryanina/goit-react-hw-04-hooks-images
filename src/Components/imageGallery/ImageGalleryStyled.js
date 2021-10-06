import styled from 'styled-components';

const GalleryContainer = styled.div`
    .ImageGallery {
        display: grid;
        max-width: calc(100vw - 48px);
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 16px;
        margin-top: 0;
        margin-bottom: 0;
        padding: 0;
        list-style: none;
        margin-left: auto;
        margin-right: auto;
    }
`;

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: 400;
`;

const galleryStyle = {
    GalleryContainer,
    DivContainer
}

export default galleryStyle;