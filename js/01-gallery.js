import { galleryItems } from './gallery-items.js';
// Change code below this line
//

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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }).join("");
}
galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  
  const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
  `, {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscapeKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscapeKeyPress);
    }
  });
  
  instance.show();

  const largeImageURL = evt.target.dataset.source;
  instance.element().querySelector('img').src = largeImageURL;

   function onEscapeKeyPress(evt) {
    if (evt.code === 'Escape') {
      instance.close();
     }
  }
}