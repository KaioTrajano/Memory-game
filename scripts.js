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
    <img class="front-face" src="${img}"/>
    <img class="back-face" src="lolcard.svg">
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
  let board = document.getElementById("cardboard")

  
  placardepontuação.innerHTML =  pontuação + " pts"
  congratulation.style.display = "block"
  playagain.addEventListener("click", finish)
  congratulation.classList.add("congrats");
   board.style.filter = "blur(2.2px)"
    setTimeout(() => congratulation.style.animation = "animaçao 0.5s", );

    
    

    },500)
}

}

const quantidade = document.querySelectorAll(".memory-card")

var images = [
       "backgroundionia.png",
       "backgroundahri.png",
       "backgroundvi.png",
       "backgroundcaitlyn.png",
       "backgroundjinx.png",
       "backgroundakali.png",
       "backgroundjayce.png",
       
       
       
       
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

       let board = document.getElementById("cardboard")
       board.style.filter = "blur(0)"
       let background = document.querySelector("body")
      
      background.style.backgroundImage = "url(" + images[Math.round(Math.random() * 7)] + ")";

  }


    

let cardsclass = document.getElementsByClassName("memory-card.flip").length
cards.forEach(card => card.addEventListener("click", flipCard));
