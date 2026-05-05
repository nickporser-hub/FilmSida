const container = document.getElementById("cartContainer");

const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
console.log(bookings);

if (bookings.length === 0)
{
    container.textContent = "Inga bokningar.";
}
else
{
    //Clear button
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear bookings";
    clearBtn.classList.add("clear-btn");

    clearBtn.addEventListener("click", () =>
    {
        localStorage.removeItem("bookings", JSON.stringify([]));
        location.reload();
    });
    container.appendChild(clearBtn);

    bookings.forEach((booking, index) =>
    {
        const div = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = booking.title;

        const time = document.createElement("p");
        time.textContent = "Tid: " + booking.time;

        //const amount = document.createElement("p");
        //amount.textContent = "antal: " + booking.amount;

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w200${booking.poster}`;

        //Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", () =>
        {
            bookings.splice(index, 1);
            localStorage.setItem("bookings", JSON.stringify(bookings));
            location.reload();
        });

        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(time);
        div.appendChild(removeBtn);

        container.appendChild(div);
    });
}