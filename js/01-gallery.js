import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
galleryItems.forEach(e => {
    galleryEl.innerHTML += `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${e.preview}"
        data-source="${e.original}"
        alt="${e.description}"
      />
    </a>
  </li>` 
  
})
galleryEl.addEventListener('click', e => {
    e.preventDefault()
   const imgShow =  basicLightbox.create(`
		<img src="${e.target.dataset.source}">
	`)
    imgShow.show()
    if(imgShow.visible()){
        document.addEventListener('keydown', e => {
            if(e.code === 'Escape'){
                imgShow.close()
            }
        })
    }
})
