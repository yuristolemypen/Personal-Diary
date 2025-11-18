const conceptContainer = document.getElementById('js-entry-wrapper-tab3');

export function conceptToggle() {
  if(!conceptContainer) return;

  conceptContainer.addEventListener('click', (event) => {
    const expandBtn = event.target.closest('.expand-btn.title');
    const shrinkBtn = event.target.closest('.shrink-btn.title');
    if (!expandBtn && !shrinkBtn) return;

    const category = event.target.closest('.concept-category')
    if (!category) return;

    const subCategory = category.querySelector('.concept-subcategory');
    const expandBtnTitle = category.querySelector('.expand-btn.title');
    const shrinkBtnTitle = category.querySelector('.shrink-btn.title');

    if (expandBtn) {
      subCategory.style.display = 'none';
      expandBtnTitle.style.display = 'none';
      shrinkBtnTitle.style.display = 'block';

      return;
    };

    if (shrinkBtn) {
      subCategory.style.display = '';
      expandBtnTitle.style.display = '';
      shrinkBtnTitle.style.display = '';

      return;
    }
  });
};


export function subConceptToggle() {
  if (!conceptContainer) return;

  conceptContainer.addEventListener('click', (event) => {
    const expandBtn = event.target.closest('.expand-btn.sub-title');
    const shrinkBtn = event.target.closest('.shrink-btn.sub-title');
    if (!expandBtn && !shrinkBtn) return;

    const category = event.target.closest('.concept-subcategory')
    if (!category) return;

    const conceptList = category.querySelector('.concept-list');
    const expandBtnTitle = category.querySelector('.expand-btn.sub-title');
    const shrinkBtnTitle = category.querySelector('.shrink-btn.sub-title');

    if (expandBtn) {
      conceptList.style.display = 'none';
      expandBtnTitle.style.display = 'none';
      shrinkBtnTitle.style.display = 'block';

      return;
    };

    if (shrinkBtn) {
      conceptList.style.display = '';
      expandBtnTitle.style.display = '';
      shrinkBtnTitle.style.display = '';

      return;
    }
  });
}

export function conceptListToggle() {
  if (!conceptContainer) return;

  conceptContainer.addEventListener('click', (event) => {
    if (!event.target.closest('.concept-title-btn')) return;

    const conceptList = event.target.closest('.concept-list')
    if (!conceptList) return;

    const conceptDescription = conceptList.querySelector('.concept-description');

    conceptDescription.classList.toggle('hidden')
  });
}