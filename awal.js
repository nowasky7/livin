document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');
    
    image.addEventListener('click', function() {
        if (image.src.includes('img1.png')) {
            image.src = 'img2.png';
        } else {
            image.src = 'img1.png';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image-two');
    
    image.addEventListener('click', function() {
        if (image.src.includes('imej1.png')) {
            image.src = 'imej2.png';
        } else {
            image.src = 'imej1.png';
        }
    });
});
