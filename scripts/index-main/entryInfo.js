import { entryInfo } from "../data/entryInfoData.js";

export function renderEntryInfo() {
  let entryInfoHTML = `
    <header class="main-header">
      <img class="entry-searchbar-profile" src="../images/icons/entry_profile.jpg">
      <div class="entry-input" contenteditable="true" data-placeholder="Add entry"></div>
    </header>
  `;

  entryInfo.forEach((info) => {
    entryInfoHTML += `
    <article class="entry-grid-container">
      <aside class="entry-info">
        <div class="entry-profile-container">
          <img class="entry-profile" src="${info.entryProfile}">
        </div>
        <div class="entry-name-container">
          <p class="entry-name">${info.entryName}</p>
        </div>
        <div class="date-and-time-container">
          <p>${info.entryDate}</p>
          <p>${info.entryTime}</p>
        </div>
      </aside>
      <div class="entry-content">
        <div class="entry-scroll">
          <p>${info.entryInfo}</p>
        </div>
      </div>
    </article>
    `
  });

  document.getElementById('js-entry-wrapper')
    .innerHTML = entryInfoHTML;
}