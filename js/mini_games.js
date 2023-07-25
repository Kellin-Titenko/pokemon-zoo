
const button_info = document.getElementById("info_butten");
const button_pokemon = document.getElementById("pokemons_butten");
const button_mini_games = document.getElementById("mini_butten");
const mewtwo = document.getElementById("mewtwo");
const eevee = document.getElementById("eevee");
const picachu = document.getElementById("picachu");
const poke_ball = document.getElementById("poke_ball");
let the_game_to_show;
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


function game_clik(e) {
    console.log(e.target.id);
    the_game_to_show = e.target.id;
    window.location.href = "the_mini_game.html";
}

button_info.addEventListener("click", fun_clik_pokemon1);
button_pokemon.addEventListener("click", fun_clik_pokemon2);
button_mini_games.addEventListener("click", fun_clik_pokemon3);
mewtwo.addEventListener("click", game_clik);
picachu.addEventListener("click", game_clik);
eevee.addEventListener("click", game_clik);
poke_ball.addEventListener("click", game_clik);
button_join.addEventListener("click", fun_clik_pokemon0);

