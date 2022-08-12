import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const markupGallery = `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}  
    />
  </a>
</div>`;
  galleryContainer.insertAdjacentHTML("beforeend", markupGallery);
});

let instance;

galleryContainer.addEventListener("click", onGetRefOriginalImg);

function onGetRefOriginalImg(evt) {
  evt.preventDefault();
  const dataOfImg = evt.target.hasAttribute("data-source");
  if (!dataOfImg) {
    return;
  }
  const originalImgRef = evt.target.dataset.source;
  instance = basicLightbox.create(`
      <img src=${originalImgRef}>
  `);
  instance.show();
  addListenerEscKey();
}

function addListenerEscKey(evt) {
  window.addEventListener("keydown", closeModal, { once: true });
}

function closeModal(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  instance.close();
  window.removeEventListener("keydown", closeModal);
}
