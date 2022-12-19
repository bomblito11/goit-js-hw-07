import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function scaleImage(e) {
  e.preventDefault();
  const instance = window.basicLightbox.create(`
    <div class="modal">
        <img src=${e.target.dataset.source}>
    </div>
`);
  instance.show();

  document.addEventListener("keydown", function escapeKey(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}

galleryItems.forEach((image) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
    <a class="gallery__link" href=${image.original} >
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
      />
    </a>
  </div>`
  );

  gallery.addEventListener("click", scaleImage);
});

console.log(galleryItems);
