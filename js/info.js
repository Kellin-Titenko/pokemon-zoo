
const button_info = document.getElementById("info_butten");
const button_pokemon = document.getElementById("pokemons_butten");
const button_mini_games = document.getElementById("mini_butten");
const button_join = document.getElementById("join_butten");

function fun_clik_pokemon0() {
  window.location.href = "Contact-payment.html";
}

function fun_clik_pokemon1() {
  window.location.href = "info.html";
}



function fun_clik_pokemon2() {
  window.location.href = "pokemon_kellin.html";
}


function fun_clik_pokemon3() {
  window.location.href = "mini_games.html";
}

button_info.addEventListener("click", fun_clik_pokemon1);
button_pokemon.addEventListener("click", fun_clik_pokemon2);
button_mini_games.addEventListener("click", fun_clik_pokemon3);
button_join.addEventListener("click", fun_clik_pokemon0);