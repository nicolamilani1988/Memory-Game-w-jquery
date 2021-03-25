var arr = [];
var control = [];

function selectCard(){

  var clickedCard = $(this);// individuo la carta cliccata
  var showCard = clickedCard.find(".my-card"); //rendo visibile carta
  showCard.addClass("show");

  var coppia = clickedCard.data("value").toUpperCase(); //parametro A o B
  var cardImg = clickedCard.find("span").text(); // immagine/testo carta
  var repeat = coppia+cardImg; // parametro cartaA / cartaB


  if(control.includes(repeat)){ //condizione per evitare click sulla stessa carta
    alert("cliccane un altra");
  } else {
    if(arr.length<1){ // creo array per matchare le immagini/testo
      arr.push(cardImg);
    } else if (arr.includes(cardImg)) { // carta matchata
      // console.log("centro");
      $(".my-card.show").each(function(){ // per ogni carta scoperta, faccio azioni
        $(this).text("CARTA SCOPERTA");
        $(this).addClass("show-strong"); // classe che mi permette di tenere display
        $(this).parent().removeClass(".clickable"); // classe che mi rende incliccabile la carta
      })
      arr=[]; //riazzero array per accoppiam
      control=[]; // riazzero array per controllo

    } else { // carta NON matchata
      console.log("mancato");
      $(".my-card.show").each(function(){
        $(this).removeClass("show"); //rinascondo carta
        arr=[]; //riazzero array per accoppiam
        control=[]; // riazzero array per controllo
        // --------CONTINUARE---------
      })

    }

  }
  console.log("controllo match",arr);
  console.log("controllo AB" ,control);

  control.push(repeat); //push controllo repeat che avviene solo alla prima carta,dopodichè ci sono condizioni per cui ilpush è stoppato in ogni caso.

}

function init(){

  $(".clickable").click(selectCard);

}

$(document).ready(init);
