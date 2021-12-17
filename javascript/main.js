const inputImg = document.querySelector('#input-img');

inputImg.addEventListener('change', (e) => {
    let file = e.target.files[0];

    if(!file) return;

    let image = document.createElement('img');

    image.src = URL.createObjectURL(file);

    document.querySelector('.preview').appendChild(image)
})