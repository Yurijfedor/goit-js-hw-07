import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const markupGallery = `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
  galleryContainer.insertAdjacentHTML("beforeend", markupGallery);
});

// galleryContainer.addEventListener("click", (evt) => evt.preventDefault);

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
