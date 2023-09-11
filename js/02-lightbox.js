import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryItemMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
  .map(({
    preview, original, description}) => { 
      return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
  }).join("");
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });