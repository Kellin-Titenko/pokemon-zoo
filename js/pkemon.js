const big = document.getElementById('big');
const very_big = document.getElementById('very_big');
const huge = document.getElementById('huge');

// top nac bar

const button_info = document.getElementById("info_butten");
const button_pokemon = document.getElementById("pokemons_butten");
const button_mini_games = document.getElementById("mini_butten");



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

// top nac bar


// get pokemon from the server
function getPokemon() {
  let name = document.getElementById("pokemon_name").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      big.classList.remove('show_poke_masseg');
      very_big.classList.remove('show_poke_masseg');
      huge.classList.remove('show_poke_masseg');
      document.querySelector(".pokemon_box").innerHTML = `
    <div>
    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
    </div>
    <div class="pokemom_info">
    <h1>${data.name}</h1>
    <p>Weight: ${data.weight}kg</p>
    </div>
    `
    if (data.weight >= 80 && data.weight <= 120){
      big.classList.add('show_poke_masseg');
    } else if(data.weight >= 121 && data.weight <= 500){
      very_big.classList.add('show_poke_masseg');
    } else if (data.weight >= 500){
      huge.classList.add('show_poke_masseg');
    }
    })
    .catch((err) => { console.log("dident fetch", err); })
}

const search_button = document.getElementById("search");
search_button.addEventListener("click", getPokemon);

//import poke card
/*

  using 
    - an animated gif of sparkles.
    - an animated gradient as a holo effect.
    - color-dodge blend mode

  this could be enhanced with some 3d effects
  which change the background positions
  
*/

var $cards = $(".card");
var $style = $(".hover");
$cards.on("mousemove", function(e) {
  var $card = $(this);
  var l = e.offsetX;
  var t = e.offsetY;
  var h = $card.height();
  var w = $card.width();
  var lp = Math.abs(Math.floor(100 / w * l)-100);
  var tp = Math.abs(Math.floor(100 / h * t)-100);
  var bg = `background-position: ${lp}% ${tp}%;`
  var style = `.card.active:before { ${bg} }`
  $cards.removeClass("active");
  $card.addClass("active");
  $style.html(style);
}).on("mouseout", function() {
  $cards.removeClass("active");
});