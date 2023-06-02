// window.addEventListener("DOMContentLoaded", () => {
//   const searchInput = document.querySelector("#search-input");
//   searchInput.focus();
// });

const handleSearch = (event) => {
  event.preventDefault(); // 새로고침을 방지
  const searchInput = document.querySelector("#search-input");

  const searchKeyword = searchInput.value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");

  for (const card of movieCards) {
    const title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(searchKeyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
};

// api get 요청
const fetchMovieData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-kr&page=1&include_adult=false",
    options
  );
  const data = await response.json();
  return data.results;
};
// ------------------------------------------
// const createMovieCards = async () => {
//   const movies = await fetchMovieData();
//   const cardList = document.querySelector(".card-list");
//   cardList.innerHTML = movies
//     .map(
//       (movie) => `
//         <div class="movie-card" id=${movie.id}>
//             <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//             <h3>${movie.title}</h3>
//             <p>${movie.overview}</p>
//             <p>Rating: ${movie.vote_average}</p>
//         </div>`
//     )
//     .join("");

//   cardList.addEventListener("click", ({ target }) => {
//     if (target !== cardList) {
//       if (target.className === "movie-card") {
//         alert(`영화 id: ${taㅏ}`);
//       } else {
//         alert(`영화 id: ${target.parentNode.id}`);
//       }
//     }
//   });
// };

// createMovieCards();

// -------------------------------
async function createMovieCards() {
  try {
    const movies = await fetchMovieData();
    const cardList = document.querySelector(".card-list");
    console.log(cardList);
    cardList.innerHTML = "";

    for (const movie of movies) {
      const movieCards = document.createElement("div");
      movieCards.classList.add("movie-card");
      console.log(movieCards);
      movieCards.id = movie.id;

      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      console.log(image);
      movieCards.appendChild(image);

      const title = document.createElement("h3");
      title.textContent = movie.title;
      movieCards.appendChild(title);

      const overview = document.createElement("p");
      overview.textContent = movie.overview;
      movieCards.appendChild(overview);

      const rating = document.createElement("p");
      rating.textContent = `Rating: ${movie.vote_average}`;
      movieCards.appendChild(rating);

      cardList.appendChild(movieCards);
    }

    cardList.addEventListener("click", (event) => {
      const movieCard = event.target.closest(".movie-card");
      if (movieCard) {
        const movieId = movieCard.id;
        alert(`영화 id: ${movieId}`);
      }
    });
  } catch (error) {
    console.log("삐빅 에러입니당", error);
  }
}
createMovieCards();
