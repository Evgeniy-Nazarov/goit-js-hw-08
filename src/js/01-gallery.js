import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);


function creatGalleryMarkup(items) { 
    return items.map((item) => `
    <a class="gallery__item" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        `).join(''); 
}

const addGalleryMarkup = creatGalleryMarkup(galleryItems);
console.log(addGalleryMarkup);

gallery.innerHTML = addGalleryMarkup;
gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
    blockStandartAction(evt);

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
}
    function blockStandartAction(evt) {
    evt.preventDefault();
    }


const galleryAction = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    scrollZoom: false,
});
