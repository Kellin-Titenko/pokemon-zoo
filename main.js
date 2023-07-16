const navElement = document.querySelector("nav");
const textElement = document.querySelector(".text_element a");
const navliAElements = document.querySelectorAll("nav li a");
const videos = document.getElementsByClassName('video');
const currentVideoIndex = 0;

window.addEventListener("scroll",function(){
    if (window.scrollY > 200) {
        navElement.classList.add("scrolled");
        // textElement.style.color = "#D3C3DC";
        textElement.style.color = "#932f6d";
        navliAElements.forEach(function(navliElement) {
            navliElement.style.color = "#932f6d";
        });
      } else {
        navElement.classList.remove("scrolled");
        textElement.style.color = "#291A2E";
        navliAElements.forEach(function(navliElement) {
          navliElement.style.color = "#291A2E";
      });
      }
    });