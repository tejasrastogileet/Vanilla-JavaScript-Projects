let calorieCounter = document.getElementById("calorie-counter");
let budgetNumberInput = document.getElementById("budget");
let entryDropdown = document.getElementById("entry-dropdown");
let addEntryButton = document.getElementById("add-entry");
let clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

function cleanInputString(str) {
  let regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name </label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
<input type="number" id="${entryDropdown.value}-${entryNumber}-calories" min="0" placeholder="Calories" />

  `;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;  
    }
    calories += Number(currVal);
  }
}

addEntryButton.addEventListener("click", addEntry);
