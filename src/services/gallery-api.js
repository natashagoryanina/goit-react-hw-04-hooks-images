const API_KEY = '23294287-f28ad0716a186f6195177ba0b';

function fetchGallery (imageTag, page) {
    return fetch(`https://pixabay.com/api/?q=${imageTag}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
                
            return Promise.reject(
                new Error(`Cannot find ${imageTag} image`),
            );
        })
        .then((data) => {
            if(data.hits.length) {
                return data;
            };
            throw new Error(`Cannot find ${imageTag} image`);
        })
};

const api = {
    fetchGallery,
};

export default api;