const navElement = document.querySelector("nav");
const textElement = document.querySelector(".text_element");
const navliElements = document.querySelectorAll("nav li");
var videos = document.getElementsByClassName('video');
var currentVideoIndex = 0;

window.addEventListener("scroll",function(){
    if (window.scrollY > 200) {
        navElement.classList.add("scrolled");
        textElement.style.color = "#D3C3DC";
        navliElements.forEach(function(navliElement) {
            navliElement.style.color = "#D3C3DC";
        });
      } else {
        navElement.classList.remove("scrolled");
        textElement.style.color = "#291A2E";
        navliElements.forEach(function(navliElement) {
          navliElement.style.color = "#291A2E";
      });
      }
    });