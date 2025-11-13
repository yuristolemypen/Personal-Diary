import { galleryInfo, galleryPictureInfo } from "../data/entryInfoData4.js";
import '../data/entryInfoData4.js';

export function renderGalleryInfo() {
  let entryInfoHTML = ``;
  
  galleryInfo.forEach((info) => {
    entryInfoHTML += `
      <section class="gallery-category">
        <div class="gallery-category-title-container">
          <h2 class="gallery-category-title">${info.categoryTitle}</h2>
          <button class="expand-btn">
            <img src="${info.expandBtn}">
          </button>
          <button class="shrink-btn">
            <img src="${info.shrinkBtn}">
          </button>
        </div>
        <ul class="gallery-album-list">
          <li class="gallery-album-item">
            <button class="gallery-album-title-btn">${info.albumTitle}</button>
          </li>
        </ul>
      </section>
    `;
  });

  document.getElementById('js-gallery-container')
    .innerHTML = entryInfoHTML;
}


export function renderGalleryPictureInfo() {
  let entryInfoHTML = `
    <button class="gallery-return-btn">
      <img src="../images/svg-icons/return-btn.svg">
    </button>
    <button class="gallery-add-picture-btn">
      <img src="../images/svg-icons/gallery-add-btn.svg">
    </button>
  `;

  galleryPictureInfo.forEach((info) => {
    entryInfoHTML += `
        <figure class="gallery-picture">
          <img src="${info.galleryPicture}">
        </figure>
    `;
  });

  document.getElementById('js-gallery-picture-container')
    .innerHTML = entryInfoHTML;
}