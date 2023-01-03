import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__link" href=${image.original} >
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
      />
    </a>`
  );
});

const lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
