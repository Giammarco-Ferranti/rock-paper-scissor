import { checkResult } from "./utils/checkResult.js";
import { getRandomNumber } from "./utils/getRandomNumber.js";
import { values } from "./values.js";

const computerAlone = document.getElementById("computer-vs-computer");
const welcomeHeading = document.getElementById("welcome-heading");
const optionA = document.getElementById("you-vs-computer");
const firstSection = document.getElementById("initial-section");
const userSelection = document.getElementById("user-options");
const secondSection = document.getElementById("user-options-wrapper");
const gameSection = document.getElementById("game-section");

const headingTitle = values.map((i) => i.name).join(", ");
welcomeHeading.innerHTML = `Welcome to: ${headingTitle}`;
document.title = `${headingTitle}`;

//Display results computer/computer or you/computer
const displayResults = (type) => {
  firstSection.style = "display: none";
  gameSection.style = "display: flex";
  if (type === "human") {
    secondSection.style = "display: block";
    renderUserOptions();
  } else {
    handleComputerChoice();
  }
};

//Render options to show to the user options coming from values
const renderUserOptions = () => {
  userSelection.innerHTML = values
    .map(
      (i) =>
        `<button id="img_button_${i.id}" value="${i.id}" class="btn" style="font-size: 26px">${i.img}</button>`
    )
    .join("");

  values.forEach((value) => {
    const button = document.getElementById(`img_button_${value.id}`);
    if (button) {
      button.addEventListener("click", handleUserChoice);
    }
  });
};

//Actions after user choice
const handleUserChoice = (e) => {
  secondSection.style = "display: none";
  gameSection.style = "display: flex";
  const value = e.target.value;
  const randomNumber = getRandomNumber(1, values.length);
  const computerChoice = values.filter((i) => i.id === randomNumber)[0]?.img;
  const userChoice = values.filter((i) => i.id === +value)[0]?.img;
  const result = checkResult(value, randomNumber, values);
  renderGameResult(computerChoice, userChoice, result);
};

//Actions after computer choice
const handleComputerChoice = () => {
  const computerA = getRandomNumber(1, values.length);
  const computerB = getRandomNumber(1, values.length);
  const result = checkResult(computerA, computerB, values);
  const computerAChoice = values.filter((i) => i.id === computerA)[0]?.img;
  const computerBChoice = values.filter((i) => i.id === computerB)[0]?.img;
  renderGameResult(computerAChoice, computerBChoice, result, true);
};

//Ending game result
const renderGameResult = (player1, player2, result, isComputer = false) => {
  gameSection.innerHTML = `
    <div class="results-text">
    <h4>${
      isComputer ? "Computer A choose:" : "Computer choose:"
    }</h4> <div style="font-size: 30px">${player1}</div>
    </div>
    <br/>
        <div class="results-text">
    <h4>${isComputer ? "Computer B choose:" : "You choose:"}</h4>
    <div style="font-size: 30px">
    ${player2}
    </div>
    </div>
    <br/>
    <h2>${
      result === 0
        ? "Tie"
        : result === 1
        ? `${isComputer ? "Computer A" : "You"} win`
        : `${isComputer ? "Computer B win" : "Computer Win"}`
    }</h2>
     <button id="restart-button" class="btn">Restart</button>
    `;
  const restartBtn = document.getElementById("restart-button");
  if (restartBtn) {
    restartBtn.addEventListener("click", (e) => {
      return window.location.reload();
    });
  }
};

optionA.addEventListener("click", () => displayResults("human"));
computerAlone.addEventListener("click", () => displayResults("computer"));
