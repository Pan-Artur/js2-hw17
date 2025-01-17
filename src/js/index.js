import { getImages } from "./get-images-api.js";
const galleryButtonEl = document.querySelector(".gallery-button");

let currentPage = 2;

const renderImages = (images) => {
    const galleryEl = document.querySelector(".gallery");

    const markup = images.map(({ webformatURL, tags }) => `<li class="gallery-item"><img class="gallery-image" src="${webformatURL}" alt="${tags}"></img></li>`).join("");

    galleryEl.insertAdjacentHTML("beforeend", markup);

    const imagesArr = document.querySelectorAll(".gallery-image");

    imagesArr.forEach((image) => {
        image.onload = () => {
            image.classList.add("loaded");
        };
    });
}

getImages().then((images) => {
    renderImages(images);
});

galleryButtonEl.addEventListener("click", () => {
    getImages(currentPage).then((images) => {
        renderImages(images);
        currentPage += 1;
    });
});


