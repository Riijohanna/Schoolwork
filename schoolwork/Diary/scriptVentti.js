// function createDeck() {
//
//   var cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//   var cardColor = ["spade", "diamomd", "heart", "club"];
//   var cardDeck = [];
//
//   for (var i = 0; i < cardNumber.length; i++) {
//     for (var j = 0; j < cardColor.length; j++) {
//       var cardNumberValue = cardNumber[i];
//       var cardColorValue = cardColor[j];
//       var card = {
//         value: cardNumberValue,
//         color: cardColorValue
//       };
//       cardDeck.push(card);
//     }
//   }
//   return cardDeck;
// }
// console.log(createDeck());
function createDeck() {
  let arr = [];
  for (let i = 1; i < 5; i++) {
    for (let j = 2; j < 15; j++) {
      arr.push(j);
    }
  }
  return arr;
}

let userStops = false;
let hostHand = [];
let userHand = [];
let cardDeck = createDeck();

function hostStops() {
  return handSum(hostHand) > 17 || handSum(hostHand) == handSum(userHand);
}

function userStopsTaking() {
  userStops = true;
  while (!hostStops()) {
    playCard();
  }
  getWinner();
}

function handSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function playCard() {
  if (!userStops) {
    let userIndex = Math.floor(Math.random() * cardDeck.length);
    let userCard = cardDeck.splice(userIndex, 1)[0];
    userHand.push(userCard);
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = userCard;
    document.getElementById("player").appendChild(div);
    document.getElementById("sumplayer").innerHTML = handSum(userHand);
  }
  if (!hostStops() && userStops) {
    let hostIndex = Math.floor(Math.random() * cardDeck.length);
    let hostCard = cardDeck.splice(hostIndex, 1)[0];
    hostHand.push(hostCard);
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = hostCard;
    document.getElementById("host").appendChild(div);
    document.getElementById("sumhost").innerHTML = handSum(hostHand);
  }
}

function startAgain() {
  hostHand = [];
  userHand = [];
  cardDeck = createDeck();
  userStops = false;
  document.getElementById("host").innerHTML = "";
  document.getElementById("player").innerHTML = "";
  document.getElementById("winner").innerHTML = "";
  document.getElementById("sumhost").innerHTML = "";
  document.getElementById("sumplayer").innerHTML = "";
  // console.log(hostHand);
  // console.log(userHand);
  // console.log(cardDeck);
}

function getWinner() {
  if (handSum(userHand) > 21 && handSum(hostHand) > 21) {
    document.getElementById("winner").innerHTML = "Tie!";
  } else if (handSum(userHand) > 21) {
    document.getElementById("winner").innerHTML = "Host wins!";
  } else if (handSum(hostHand) > 21) {
    document.getElementById("winner").innerHTML = "Player wins!";
  } else {
    if (handSum(userHand) <= handSum(hostHand)) {
      document.getElementById("winner").innerHTML = "Host wins!";
    } else {
      document.getElementById("winner").innerHTML = "Player wins!";
    }
  }
}
