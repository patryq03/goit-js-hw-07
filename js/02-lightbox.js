import { galleryItems } from "./gallery-items.js";
// Change code below this line
const div = document.querySelector("ul.gallery");
div.addEventListener("click", (event) => {
    event.preventDefault();
var lightbox = new SimpleLightbox(' a.gallery__item');
lightbox.show();
});
for (const item of galleryItems) {
  const html = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`;
  div.insertAdjacentHTML('beforeend', html);


}
console.log(galleryItems);
const altTimer = document.querySelector(`img[alt=${image.description}]`);
altTimer.addEventListener('click', _.debounce( () =>{
 altTimer.show();
},250));
console.log(html);