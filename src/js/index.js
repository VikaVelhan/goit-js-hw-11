import { fetchImages } from '../js/fetchImages';
import { createMarkup } from '../js/createMarkup';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('.search-form-input');
const btnSearch = document.querySelector('.search-form-button');
const gallery = document.querySelector('.gallery');
const btnLoad = document.querySelector('.load-more');
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');
let pageNumber = 1;

btnLoad.style.display = 'none';

btnSearch.addEventListener('click', e => {
  e.preventDefault();
  cleanGallery();
  const trimmedValue = input.value.trim();
  if (trimmedValue !== '') {
    fetchImages(trimmedValue, pageNumber).then(foundData => {
      if (foundData.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        createMarkup(foundData.hits);
        Notiflix.Notify.success(
          `Hooray! We found ${foundData.totalHits} images.`
        );
        btnLoad.style.display = 'block';
        gallerySimpleLightbox.refresh();
      }
    });
  }
});

btnLoad.addEventListener('click', () => {
  pageNumber += 1;
  const trimmedValue = input.value.trim();
  btnLoad.style.display = 'none';
  fetchImages(trimmedValue, pageNumber).then(foundData => {
    if (foundData.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      createMarkup(foundData.hits);
      Notiflix.Notify.success(
        `Hooray! We found ${foundData.totalHits} images.`
      );
      btnLoad.style.display = 'block';
    }
  });
});

function cleanGallery() {
  gallery.innerHTML = '';
  pageNumber = 1;
  btnLoad.style.display = 'none';
}
