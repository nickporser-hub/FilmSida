const movieContainer = document.getElementById("movieContainer");
const API_KEY = "b900bc49bccaf8e4fee071da4edb16fc"; // from TMDB

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  .then(res => res.json())
  .then(data => {
    console.log(data); // check what you get

    data.results.forEach(movie => {
      const img = document.createElement("img");

      // TMDB images use this base URL + the poster_path
      img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
      img.alt = movie.title;

      movieContainer.appendChild(img);
    });
  })
  .catch(err => console.error(err));