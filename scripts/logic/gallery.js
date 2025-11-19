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
  if (!galleryContainer) return;

  galleryContainer.addEventListener('click', (event) => {
    const categorySection = event.target.closest('.gallery-category');
    if (!categorySection) return;

    const galleryAlbum = categorySection.querySelector('.gallery-album-list');
    const expandBtn = categorySection.querySelector('.expand-btn');
    const shrinkBtn = categorySection.querySelector('.shrink-btn');

    if (!expandBtn || !shrinkBtn || !galleryAlbum) return;

    if (event.target.closest('.expand-btn')) {
      galleryAlbum.classList.remove('hidden');
      expandBtn.classList.add('hidden');
      shrinkBtn.classList.remove('hidden');
    }

    if (event.target.closest('.shrink-btn')) {
      galleryAlbum.classList.add('hidden');
      expandBtn.classList.remove('hidden');
      shrinkBtn.classList.add('hidden');
    }; 
  });
}