let player1 = 0;
let player2 = 0;

function getRandomNumber(n) {
  //  Code for Player One
  if (n === "btn1") {
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").disabled = false;
    let ClickSound = new Audio("./sounds/mouse-click.mp3");
    ClickSound.play();
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerHTML = randomNumber;
    player1 += randomNumber;

    if (player1 <= 10) {
      for (i = 0; i < player1; i++) {
        for (j = 0; j < player1; j++) {
          document.getElementsByClassName("boxA")[i].innerHTML = [j + 1];
        }
        document.getElementsByClassName("boxA")[i].style.backgroundColor =
          "#484394";
      }
    } else {
      player1 = player1 - randomNumber;
      let ErrorSound = new Audio("./sounds/error.mp3");
      ErrorSound.play();
    }
  }

  if (player1 === 10) {
    document.getElementById("win").innerHTML = "Player One is winner.";
    let winSound = new Audio("./sounds/congratulation.mp3");
    winSound.play();
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("display").style.visibility = "hidden";
    document.getElementById("text").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("reloadBtn").style.display = "inline";

    for (i = 0; i < player1; i++) {
      for (j = 0; j < player1; j++) {
        document.getElementsByClassName("boxA")[i].style.backgroundColor =
          "#ffbf00";
      }
    }
  }

  //  Code for Player Second
  if (n === "btn2") {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").disabled = false;
    let ClickSound = new Audio("./sounds/mouse-click.mp3");
    ClickSound.play();
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerHTML = randomNumber;
    player2 += randomNumber;

    if (player2 <= 10) {
      for (i = 0; i < player2; i++) {
        for (j = 0; j < player2; j++) {
          document.getElementsByClassName("boxB")[i].innerHTML = [j + 1];
        }
        document.getElementsByClassName("boxB")[i].style.backgroundColor =
          "#7030a0";
      }
    } else {
      player2 = player2 - randomNumber;
      let ErrorSound = new Audio("./sounds/error.mp3");
      ErrorSound.play();
    }
  }

  if (player2 === 10) {
    document.getElementById("win").innerHTML = "Player Second is winner.";
    let winSound = new Audio("./sounds/congratulation.mp3");
    winSound.play();
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("display").style.visibility = "hidden";
    document.getElementById("text").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("reloadBtn").style.display = "block";

    for (i = 0; i < player2; i++) {
      for (j = 0; j < player2; j++) {
        document.getElementsByClassName("boxB")[i].style.backgroundColor =
          "#ffbf00";
      }
    }
  }
}

// Reload the page after game completed
window.onload = function () {
  let reloadButton = document.getElementById("reloadBtn");

  reloadButton.addEventListener("click", () => {
    location.reload();
  });
};
