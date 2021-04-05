// Svolgimento con funzioni globali
function controlArrays(){

   arr = [];
   control = [];

 }

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

      matchedCard();

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
    // $(this).text("CARTA SCOPERTA");
    $(this).addClass("show-strong"); // classe che mi permette di tenere display
    $(this).parent().removeClass("clickable"); // classe che mi rende incliccabile la carta
  })
  arr=[]; //riazzero array per accoppiam
  control=[]; // riazzero array per controllo
}


function unmatchedCard(){
  $(".my-card.show").each(function(){
    $(this).removeClass("show"); //rinascondo carta
  })
  arr=[]; //riazzero array per accoppiam
  control=[]; // riazzero array per controllo
}



function init(){
  controlArrays();
  $(".card.clickable").click(selectCard);
}

// Svolgimento con funzioni globali
// $(init);


// Suggerimenti Olga
function showCard(card){
  const cardShow = card.find(".my-card");
  cardShow.addClass("show");
}

function closeCard (cards){
  cards.forEach( elem => {
    const cardShow = elem.find(".my-card");
    cardShow.removeClass("show");
  });
  return [];
}

function isOpened(card){
  const cardShow = card.find("my-card");
  console.log(cardShow.hasClass("show"))
  return cardShow.hasClass("show");
}

function isDouble(cards) {
  const cardImg2 = cards[0].find("span").text();
  const cardImg1 = cards[1].find("span").text();
  return cardImg1 === cardImg2;
}

function leaveOpened(cards) {
  cards.forEach((item) => {
    const cardFront = item.find(".my-card");
    cardFront.addClass("show-strong");
  });
  return [];
}



function initOlga (){
  let nowOpened = [];
  $(".card").click(function(){

    const currentCard = $(this);
    if(isOpened(currentCard)){
      return;
    }
   
    showCard(currentCard);
    
    nowOpened.push(currentCard);
    

    if (nowOpened.length === 2){
      if(isDouble(nowOpened)){
        nowOpened = leaveOpened(nowOpened);
      } else {
        setTimeout(function(){
          nowOpened = closeCard(nowOpened);
        },1000);
      }
    }

  })

}

$(initOlga);
