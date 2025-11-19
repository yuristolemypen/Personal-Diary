import { entryInfo3 } from "../data/entryInfoData3.js";

export function renderEntryInfo3() {
  let entryInfoHTML = ``;

  entryInfo3.forEach((info) => {
    entryInfoHTML += `
      <section class="concept-category">
        <div class="concept-category-title-container">
          <h2 class="concept-category-title">${info.categoryTitle}</h2>
          <button class="expand-btn title">
            <img src="${info.expandBtn}">
          </button>
          <button class="shrink-btn title hidden">
            <img src="${info.shrinkBtn}">
          </button>
        </div>
        <section class="concept-subcategory hidden">
          <div class="concept-subcategory-title-container">
            <button class="expand-btn sub-title">
              <img src="${info.expandBtn}">
            </button>
            <button class="shrink-btn sub-title hidden">
              <img src="${info.shrinkBtn}">
            </button>
            <p class="concept-subcategory-title">${info.subcategoryTitle}</p>
          </div>
          <ul class="concept-list hidden">
            <li class="concept-item">
              <button class = "concept-title-btn">${info.conceptTitle}</button>
              <p class = "concept-description hidden">${info.conceptDescription}</p>
            </li>
          </ul>
        </section>
      </section>
    `
  });
  
  document.getElementById('js-entry-wrapper-tab3')
    .innerHTML = entryInfoHTML;
}

