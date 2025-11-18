const galleryContainer = document.getElementById('js-gallery-container');
const galleryPictureContainer = document.getElementById('js-gallery-picture-container');

export function gallerySectionToggle() {
  if (!galleryContainer || !galleryPictureContainer) return;

  galleryContainer.addEventListener('click', (event) => {
    
    if (event.target.closest('.gallery-album-title-btn')) {
      galleryPictureContainer.classList.remove('hidden');
      galleryContainer.classList.add('hidden');
    }  
  });

  galleryPictureContainer.addEventListener('click', (event) => {

    if (event.target.closest('.gallery-return-btn')) {
      galleryPictureContainer.classList.add('hidden');
      galleryContainer.classList.remove('hidden');
    }
  });
};


export function galleryCategoryToggle() {
  galleryContainer.addEventListener('click', (event) => {
    const categorySection = event.target.closest('.gallery-category');
    if (!categorySection) return;

    const galleryAlbum = categorySection.querySelector('.gallery-album-list');
    const expandBtn = categorySection.querySelector('.expand-btn');
    const shrinkBtn = categorySection.querySelector('.shrink-btn');

    if (event.target.closest('.expand-btn')) {
      galleryAlbum.style.display = 'none';
      expandBtn.style.display = 'none';
      shrinkBtn.style.display = 'block';
    }

    if (event.target.closest('.shrink-btn')) {
      galleryAlbum.style.display = '';
      expandBtn.style.display = '';
      shrinkBtn.style.display = '';
    }; 
  });
}