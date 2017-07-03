/**
 * Preloading images using Promise.all
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

    const handleLoadImage = (src) => {
        return new Promise((resolve) => {
            const image = new Image();
            image.addEventListener(`load`, () => {
                console.log(`loading ${src}...`);
                resolve();
            });
            image.src = src;
        });
    };

    Promise
        .all(images.map(handleLoadImage))
        .then(() => {
            console.log('all images loaded');
        });
}());
