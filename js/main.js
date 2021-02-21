let containerOne = document.getElementById("container-1");
let containerTwo = document.getElementById("container-2");
let containerThree = document.getElementById("container-3");
let containerFour = document.getElementById("container-4");
let containerFive = document.getElementById("container-5");
let choices = [
  containerOne,
  containerTwo,
  containerThree,
  containerFour,
  containerFive,
];

function validate() {
  let uname = document.getElementById("username").value;
  let message = document.getElementById("usermsg");
  let form = document.getElementById("form");

  if (uname == "") {
    message.style.display = "block";
    setTimeout(function () {
      message.style.display = "none";
    }, 4000);
  } else {
    form.style.display = "none";
    containerOne.style.display = "block";
  }
}

let choiceOneR = document.querySelector(".choice-1-r");
let choiceTwoR = document.querySelector(".choice-2-r");
let choiceThreeR = document.querySelector(".choice-3-r");
let choiceFourR = document.querySelector(".choice-4-r");
let choiceFiveR = document.querySelector(".choice-5-r");
let wrongChoice = document.querySelectorAll(".choice-w");

choiceOneR.addEventListener("click", () => {
  alert("Your answer is correct, your next Question");
  containerOne.style.display = "none";
  containerTwo.style.display = "block";
});
choiceTwoR.addEventListener("click", () => {
  alert("Your answer is correct, your next Question");
  containerTwo.style.display = "none";
  containerThree.style.display = "block";
});

choiceThreeR.addEventListener("click", () => {
  alert("Your answer is correct, your next Question");
  containerThree.style.display = "none";
  containerFour.style.display = "block";
});

choiceFourR.addEventListener("click", () => {
  alert("Your answer is correct, your next Question");
  containerFour.style.display = "none";
  containerFive.style.display = "block";
});

choiceFiveR.addEventListener("click", () => {
  alert("You won the game");
  containerFive.style.display = "none";
  form.style.display = "block";
});

wrongChoice.forEach((wrongChoices) => {
  wrongChoices.addEventListener("click", () => {
    alert("You are wrong, go back to main page");
    form.style.display = "block";
    choices.map((choice) => {
      choice.style.display = "none";
    });
  });
});
