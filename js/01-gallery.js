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

galleryContainer.addEventListener("click", onGetRefOriginalImg);

function onGetRefOriginalImg(evt) {
  evt.preventDefault();
  const dataOfImg = evt.target.hasAttribute("data-source");
  if (!dataOfImg) {
    return;
  }
  const originalImgRef = evt.target.dataset.source;
  console.log(evt.target.src);
  const instance = basicLightbox.create(`
    <img src=${originalImgRef}>
`);

  instance.show();
  return originalImgRef;
}
