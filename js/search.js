const form = document.getElementById("search");
const input = document.getElementById("search-info");

function handleFormSubmit(event) {
    const value = input.value;
    event.preventDefault();
    window.location.replace(`https://www.google.com/search?q=${value}&safe=active&ssui=on`);
}

form.addEventListener("submit", handleFormSubmit)