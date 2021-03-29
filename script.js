var arr = [];
var control = [];

function selectCard(){

  var clickedCard = $(this);// individuo la carta cliccata
  var showCard = clickedCard.find(".my-card"); //rendo visibile carta
  showCard.addClass("show");

  var coppia = clickedCard.data("value").toUpperCase(); //parametro A o B
  var cardImg = clickedCard.find("span").text(); // immagine/testo carta
  var repeat = coppia+cardImg; // parametro cartaA / cartaB

  if(arr.length<1 || control.repeat<1){ // creo array per matchare le immagini/testo
    arr.push(cardImg);
    control.push(repeat);
  } else if (arr.includes(cardImg) && control.indexOf(repeat) == -1) { // carta matchata

    setTimeout(function (){
      matchedCard();
    },500);

  } else { // carta NON matchata

    setTimeout(function (){
      unmatchedCard();
    },500);

  }
  console.log("controllo match",arr);
  console.log("controllo AB" ,control);

}


function matchedCard(){
  $(".my-card.show").each(function(){ // per ogni carta scoperta, faccio azioni
    $(this).text("CARTA SCOPERTA");
    $(this).addClass("show-strong"); // classe che mi permette di tenere display
    $(this).parent().removeClass(".clickable"); // classe che mi rende incliccabile la carta
  })
  arr=[]; //riazzero array per accoppiam
  control=[]; // riazzero array per controllo
}


function unmatchedCard(){
  $(".my-card.show").each(function(){
    $(this).removeClass("show"); //rinascondo carta
    arr=[]; //riazzero array per accoppiam
    control=[]; // riazzero array per controllo
  })
}



function init(){

  $(".clickable").click(selectCard);

}

$(document).ready(init);
