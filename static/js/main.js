const navElement = document.querySelector("nav");
const textElement = document.querySelector(".text_element a");
const navliAElements = document.querySelectorAll("nav li a");
const videos = document.getElementsByClassName('video');
const currentVideoIndex = 0;
// const $SCRIPT_ROOT = "http://127.0.0.1:5000";




class Chatbox {
  constructor() {
      this.args = {
          openButton: document.querySelector('.chatbox__button'),
          chatBox: document.querySelector('.chatbox__support'),
          sendButton: document.querySelector('.send__button')
      }
      this.state = false;
      this.messages = [];
  }

  display() {
    const {openButton, chatBox, sendButton} = this.args;
    openButton.addEventListener('click', () => this.toggleState(chatBox))
    sendButton.addEventListener('click', () => this.onSendButton(chatBox))

    const node = chatBox.querySelector('input');
    node.addEventListener("keyup", ({key}) => {
        if (key === "Enter") {
            this.onSendButton(chatBox)
        }
    })
  }

  toggleState(chatbox) {
    this.state = !this.state;

    // show or hides the box
    if(this.state) {
        chatbox.classList.add('chatbox--active')
    } else {
        chatbox.classList.remove('chatbox--active')
    }
  }

  onSendButton(chatbox) {
    const textField = chatbox.querySelector('input');
    let text1 = textField.value;
    if (text1 === "") {
      return;
    }
  
    let msg1 = { name: "User", message: text1 };
    this.messages.push(msg1);
  
    // http://127.0.0.1:5000/predict
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: text1 }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      console.log("Raw Response:", response);
      return response.json();
    })
    .then(response => {
      console.log("Parsed Response:", response);
      let msg2;
      if (response.answer !== null) {
        msg2 = { name: "Meowth", message: response.answer };
      } else {
        msg2 = { name: "Meowth", message: "I'm sorry, but I couldn't understand your message." };
      }
      console.log(msg2);
      this.messages.push(msg2);
      this.updateChatText(chatbox);
      textField.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);
      this.updateChatText(chatbox);
      textField.value = 'Oops';
    });
  }

  updateChatText(chatbox) {
    let html = '';
    this.messages.slice().reverse().forEach(function(item, index) {
      console.log(item.message); // Add this line for debugging
      if (item.name === "Meowth") {
        html += `<div class="messages__item messages__item--visitor">${item.message}</div>`;
      } else {
        html += `<div class="messages__item messages__item--operator">${item.message}</div>`;
      }
    });
  
    const chatmessage = chatbox.querySelector('.chatbox__messages');
    chatmessage.innerHTML = html;
  }
  
}


const chatbox = new Chatbox();
chatbox.display();



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
    })