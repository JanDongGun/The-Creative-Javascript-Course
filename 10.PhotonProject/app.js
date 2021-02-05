const auth = "563492ad6f91700001000001ee22167b972f463aa1774618449c85b4";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");

let searchValue;

searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchPhotos(searchValue);
});

function updateInput(e) {
  searchValue = e.target.value;
}

async function fetchAPI(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });

  const data = await dataFetch.json();
  return data;
}
function generatedPictures(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}></img>
          <p>${photo.photographer}</p>`;
    gallery.appendChild(galleryImg);
  });
}

async function curatedPhotos() {
  const data = await fetchAPI("https://api.pexels.com/v1/curated?per_page=15");
  generatedPictures(data);
}

async function searchPhotos(query) {
  const data = await fetchAPI(
    `https://api.pexels.com/v1/search?query=${query}&per_page=15`
  );

  generatedPictures(data);
}

curatedPhotos();
