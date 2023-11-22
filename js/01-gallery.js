import { galleryItems } from "./gallery-items.js";
// Change code below this line
const div = document.querySelector("ul.gallery");
div.addEventListener("click", (event) => {
  event.preventDefault();
  const lightbox = basicLightbox.create(div);
  lightbox.show();
});
for (const image of galleryItems) {
  const html = `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`;
  div.insertAdjacentHTML("beforeend", html);
}
