
// top nac bar

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

// top nac bar





const poke_ball_animation = document.getElementById("poke_ball_animation");
const button = document.getElementById('poke_ball_button');
const poke_box = document.getElementById('poke_box');

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}


function getPokemon() {
  let rundom_num = getRandomNumber();
  let name;
  console.log(rundom_num);
  if (rundom_num >= 1 && rundom_num <= 33 ){
    name = "bulbasaur";
  }else if (rundom_num >= 34 && rundom_num <= 66){
    name = "charmander";
  }else if (rundom_num >= 67 && rundom_num <= 99){
    name = "squirtle";
  } else{
    name = "pikachu";
  }  
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        poke_box.classList.remove('hide_container_poke_ball');
       // document.querySelector(".pokemon_box")
       poke_box.innerHTML = `
      <div id="img_pokemon" class="hide_container_poke_ball">
      <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
      </div>`
      })
      .catch((err) => { console.log("dident fetch", err); })
  }


function activateFunction() {
    poke_box.classList.add('hide_container_poke_ball');
    getPokemon();
    poke_ball_animation.classList.remove('hide_container_poke_ball');
    setTimeout(function() {
            poke_box.classList.remove('hide_container_poke_ball');
        poke_ball_animation.classList.add('hide_container_poke_ball');
        let pokemon_img = document.getElementById('img_pokemon');
        pokemon_img.classList.remove('hide_container_poke_ball');

 
     
    }, 3600);
  }
  
  
  button.addEventListener('click', activateFunction);

  


