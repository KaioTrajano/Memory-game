const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "jayce.svg",
  "ezreal.svg",
  "soraka.svg",
  "lulu.svg",
  "vi.svg",
  "jinx.svg"
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div id="teste" class="memory-card" data-card="${img}">
    <img class="front-face" src="/_imagens/${img}"/>
    <img class="back-face" src="/_imagens/lolcard.svg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;



const cards = document.querySelectorAll(".memory-card");
let pontuação = 0
let firstcard, secondcard;
let lockcards = false



function flipCard() {
 if(lockcards) return false
  this.classList.add("flip");
   
  if (!firstcard) {
    firstcard = this;
    return false;
  }

  secondcard = this;

 

  checkFormatch();
  congratulation()

  
}



let contador = 0
function checkFormatch() {
  
  let ismatch = firstcard.dataset.card === secondcard.dataset.card;
   if (!ismatch){
     pontuação -= 53

    disablecards()
  }else {
      resetcards()
      contador++
      pontuação += 156
    }
}

function disablecards(){
lockcards = true

setTimeout(() => {
    firstcard.classList.remove("flip")
    secondcard.classList.remove("flip")
 
    resetcards()
    
}, 1000)

}


function resetcards() {
  
  firstcard = null 
  secondcard = null
  lockcards = false
}

(function randomizar(){

   

    cards.forEach(card =>{
      card.classList.remove("flip")
         let random = Math.floor(Math.random() * 12)
        card.style.order = random;
        

    })
})() 


function congratulation(){

  if(contador === 6){
      
      setTimeout(() => {
    
  let congratulation = document.getElementById("cb")
  let playagain = document.getElementById("playagain")
  let placardepontuação = document.getElementById("pontuaçao")
  let background = document.querySelector("body")

  
  placardepontuação.innerHTML =  pontuação + "pts"
  congratulation.style.display = "block"
  playagain.addEventListener("click", finish)
  congratulation.classList.add("congrats");
    setTimeout(() => congratulation.style.animation = "animaçao 0.5s", );

    
    

    },500)
}

}

const quantidade = document.querySelectorAll(".memory-card")

var images = [
       "_imagens/backgroundakali.png",
       "_imagens/backgroundjayce.svg",
       "_imagens/backgroundjinx.svg",
       "_imagens/backgroundcaitlyn.svg",
       "_imagens/enfermeiraakali.svg",
       
       
       
];

function finish(){
  
  let congratulation = document.getElementById("cb")
   pontuação = 0 
    
  cards.forEach(card => {
         card.classList.remove("flip")
         let random = Math.floor(Math.random() * 12)
        card.style.order = random;
        contador = 0
      congratulation.style.display = "none"
      
       })

  
       let background = document.querySelector("body")
      
      background.style.backgroundImage = "url(" + images[Math.round(Math.random() * 5)] + ")";

  }


    

let cardsclass = document.getElementsByClassName("memory-card.flip").length
cards.forEach(card => card.addEventListener("click", flipCard));
