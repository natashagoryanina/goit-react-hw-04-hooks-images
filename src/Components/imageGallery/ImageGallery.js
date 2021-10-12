import React, {useState, useEffect} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import galleryAPI from '../../services/gallery-api';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import galleryStyle from './ImageGalleryStyled';

const ImageGallery = ({image}) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [page, setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [targetImg, setTargetImg] = useState({});

    useEffect(() => {
        if (image) {
            setStatus('pending');
            setPage(1);

            galleryAPI
            .fetchGallery(image, page)
            .then(img => {
                        setImages([...img.hits]);
                        setStatus('resolved');
                        setPage(prev => prev+1);
                    }
                )
            .catch(error => {
                    setError(error);
                    setStatus('rejected');
                });
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
            .then(img => {
                    setImages((prev) => [...prev, ...img.hits]);
                    setStatus('resolved');
                    setPage(prev => prev+1);
                });
    };

    const findTargetImg = (e) => {
        const id = e.currentTarget.id;
        const targetElement = images.find((item) => item.id == id);

        setIsModalOpen((prev) => !prev);
        setTargetImg({...targetElement});
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
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
        return <h3>{error}</h3>;
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
