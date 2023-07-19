
const poke_ball_animation = document.getElementById("poke_ball_animation");
const button = document.getElementById('poke_ball_button');
const poke_box = document.getElementById('poke_box');

function getPokemon() {
    let name = "picachu"
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        poke_box.classList.remove('hide_container_poke_ball');
        document.querySelector(".pokemon_box").innerHTML = `
      <div>
      <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
      </div>`
      })
      .catch((err) => { console.log("dident fetch", err); })
  }


function activateFunction() {
    poke_box.classList.add('hide_container_poke_ball');
    poke_ball_animation.classList.remove('hide_container_poke_ball');
    setTimeout(function() {
      
            poke_box.classList.remove('hide_container_poke_ball');
        poke_ball_animation.classList.add('hide_container_poke_ball');
 
     
    }, 3600);
  }
  
  
  button.addEventListener('click', activateFunction);

  


