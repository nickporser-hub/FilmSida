const movie = JSON.parse(localStorage.getItem("selectedMovie"));
const container = document.getElementById("movieDetails");

if(movie)
{
    const title = document.createElement("h1");
    title.textContent = movie.title;

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

    const desc = document.createElement("p");
    desc.textContent = movie.overview;

    const rating = document.createElement("p");
    rating.textContent = "Rating: " + movie.vote_average;

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(desc);
    container.appendChild(rating);
}

document.addEventListener("DOMContentLoaded", () => {
    const bookBtn = document.getElementById("bookBtn");
    const timeSelect = document.getElementById("timeSelect");
    const amountSelect = document.getElementById("amount");

    bookBtn.addEventListener("click", () =>
    {
        if (!movie) return;

        const selectedTime = timeSelect.value;
        const selectedAmount = amountSelect.value;

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        bookings.push({
            title: movie.title,
            time: selectedTime,
            poster: movie.poster_path,
            amount: selectedAmount
        });

        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Bokning sparad!");
    });
});