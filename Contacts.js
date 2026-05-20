function login() 
{
    let email = document.getElementById("email").value;

    if (email.includes("@gmail")) 
    {
        document.querySelector(".loginBox").style.display = "none"; // ta bort loginrutan

        alert("Inloggad!");
    } 
    else 
    {
        alert("Felaktig email!");
    }
}