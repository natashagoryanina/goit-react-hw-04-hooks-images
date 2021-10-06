import React, {useState, useEffect} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import galleryAPI from '../../services/gallery-api';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import galleryStyle from './ImageGalleryStyled';

const initialState = { 
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    isModalOpen: false,
    targetImg: {}
};

const ImageGallery = ({image}) => {
    const [state, setState] = useState(initialState);
    const {images, error, status, page, isModalOpen, targetImg} = state;

    useEffect(() => {
        if (image) {
            setState({ status: 'pending', page: 1});

            galleryAPI
            .fetchGallery(image, page)
            .then(img => setState((prev)=> 
                ({images: [...img.hits], status: 'resolved', page: prev.page+1})
            ))
            .catch(error => setState({error, status: 'rejected'}));
        };
    }, [image]);

    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    }, [images]);

    const loadMore = () => {
        const nextImg = image;
        galleryAPI
            .fetchGallery(nextImg, page)
            .then(img => setState((prev)=> 
                ({...prev, images: [...prev.images, ...img.hits], status: 'resolved', page: prev.page+1})
            ));
    };

    const findTargetImg = (e) => {
        const id = e.currentTarget.id;
        const targetElement = images.find((item) => item.id == id);

        setState((prev) => ({
          ...prev,
          isModalOpen: !prev.isModalOpen,
          targetImg: {...targetElement}
        }));
    };

    const toggleModal = () => {
        setState((prev) => ({
            ...prev,
          isModalOpen: !prev.isModalOpen
        }));
    };

    if(status === 'idle') {
        return <galleryStyle.DivContainer>Enter an image tag, please.</galleryStyle.DivContainer>;
    };

    if(status === 'pending') {
        return <Loader
            type="ThreeDots"
            color="#777879"
            height={100}
            width={100}
            timeout={3000} 
        />;
    };

    if(status === 'rejected') {
        return <h3>{error.message}</h3>;
    };

    if(status === 'resolved') {
        return (
            <galleryStyle.GalleryContainer>
                <ul className="ImageGallery">
                    {images.map((item) => 
                        <ImageGalleryItem imgUrl={item.webformatURL} imgAlt={item.tags} 
                        imgId={item.id} onClick={findTargetImg}/>
                    )}
                </ul>
                {images.length > 0 && <Button onClick={loadMore}></Button>}
                {isModalOpen && <Modal image={targetImg} toggleModal={toggleModal}/>}
            </galleryStyle.GalleryContainer>
        );
    };
};

export default ImageGallery;
