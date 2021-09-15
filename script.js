const images = [
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg',
    'img/img-4.jpg'
]

let num = 0;

setInterval(() => {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    const img = document.getElementById('owl_image_slider');
    img.setAttribute('src', images[num]);
},3000)