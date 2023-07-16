const button_info = document.getElementById("info_butten");
button_info.addEventListener("click", fun_clik_pokemon1);
function fun_clik_pokemon1() {
  console.log("hi!")
  window.location.href = "kellin1.html";
}

const button = document.getElementById("pokemons_butten");
button.addEventListener("click", fun_clik_pokemon2);
function fun_clik_pokemon2() {
  console.log("hi!")
  window.location.href = "pokemon_kellin.html";
}

const search_button = document.getElementById("search");
search_button.addEventListener("click", getPokemon);
function getPokemon() {
  let name = document.getElementById("pokemon_name").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemon_box").innerHTML = `
    <div>
    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
    </div>
    <div class="pokemom_info">
    <h1>${data.name}</h1>
    <p>Weight: ${data.weight}kg</p>
    </div>
    `
    })
    .catch((err) => { console.log("dident fetch", err); })
}


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