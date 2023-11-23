import { galleryItems } from "./gallery-items.js";
// Change code below this line
const div = document.querySelector("ul.gallery");

for (const item of galleryItems) {
  const html = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`;
  div.insertAdjacentHTML("beforeend", html);
}
const galleryImages = document.querySelectorAll(".gallery__item");
new SimpleLightbox(galleryImages, {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
