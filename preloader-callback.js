/**
 * Preloading images using simple counter and callbacks
 */
(function () {
    const images = [
        'https://dummyimage.com/100',
        'https://dummyimage.com/150',
        'https://dummyimage.com/200',
        'https://dummyimage.com/250',
        'https://dummyimage.com/300',
        'https://dummyimage.com/350',
        'https://dummyimage.com/400',
        'https://dummyimage.com/450',
        'https://dummyimage.com/500',
        'https://dummyimage.com/550',
        'https://dummyimage.com/600',
        'https://dummyimage.com/650',
        'https://dummyimage.com/700',
        'https://dummyimage.com/750',
        'https://dummyimage.com/800',
        'https://dummyimage.com/850',
        'https://dummyimage.com/900',
        'https://dummyimage.com/950',
        'https://dummyimage.com/1000',
    ];

    const imagesCount = images.length;
    let loadedImagesCount = 0;

    const handleLoadAllImages = () => {
        console.log('all images loaded');
    };

    const handleLoadImage = () => {
        loadedImagesCount = loadedImagesCount + 1;
        if (loadedImagesCount === imagesCount) {
            handleLoadAllImages();
        }
    };

    images.forEach(src => {
        console.log(`loading ${src}...`);
        const currentImage = new Image();
        currentImage.onload = handleLoadImage;
        currentImage.src = src;
    });
}());
