const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjIwMDk1NGQwZTEzNWIwMGI3OGEzNzIwMmFiZjMzZSIsInN1YiI6IjY0NzA4YTUyNTQzN2Y1MDEyNjNhOWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psZ6eR-aZVytWzY9OJF7vHx4zdt9erCJqWUlHbm1jek",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
