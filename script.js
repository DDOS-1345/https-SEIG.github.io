
const jokeEl = document.getElementById("joke")

const jokeBtn = document.getElementById("jokeBtn")


jokeBtn.addEventListener("click", generateJoke)

const config = {
  headers: {
    Accept: "application/json",
  },
}


function generateJoke() {
  
  fetch("https://icanhazdadjoke.com", config)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      jokeEl.innerHTML = data.joke
    })
}
