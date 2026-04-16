const movieContainer = document.getElementById("movieContainer");
const API_KEY = "b900bc49bccaf8e4fee071da4edb16fc"; // från TMDB

LoadMovies();

function LoadMovies()
{
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => 
    {
      console.log(data); 

      data.results.forEach(movie => 
      {
        const img = document.createElement("img");

        img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        img.alt = movie.title;

        img.addEventListener("click", () =>
        {
          localStorage.setItem("selectedMovie", JSON.stringify(movie));
          window.location.href = "Info.html";
        });

        movieContainer.appendChild(img);
      });
    })
    .catch(err => console.error(err));
}

function HomeMovies()
{
  const img = document.createElement("img");
}