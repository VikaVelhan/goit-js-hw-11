const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31938482-76419dff0cedda02808dc9161';

export const fetchImages = async (inputValue, pageNr) => {
  return await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
