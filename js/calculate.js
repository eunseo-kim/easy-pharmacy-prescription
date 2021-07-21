const drugCountForm = document.querySelector("#drug-input__form");
const drugCount = drugCountForm.querySelector(".drug-count");
const box_text = document.querySelector("#box__number");
const plate_text = document.querySelector("#plate__number");
const line_text = document.querySelector("#line__number");
const space_text = document.querySelector("#space__number");

let box = 0;
let plate = 0;
let line = 0;
let space = 0;

function drugCountSubmit(event) {
  event.preventDefault();
  let drugNumber = drugCount.value;
  const drugName = document.querySelector("input[name='drug']:checked").id;
  if (drugName === "HARU-D") {
    box = parseInt(drugNumber / 140);
    drugNumber = drugNumber % 140;
    plate = parseInt(drugNumber / 14);
    drugNumber = drugNumber % 14;
    line = parseInt(drugNumber / 7);
    drugNumber = drugNumber % 7;
    space = drugNumber;
  } else if (drugName === "OPAL") {
    box = parseInt(drugNumber / 84);
    drugNumber = drugNumber % 84;
    plate = parseInt(drugNumber / 21);
    drugNumber = drugNumber % 21;
    line = parseInt(drugNumber / 7);
    drugNumber = drugNumber % 7;
    space = drugNumber;
  } else {
    box = parseInt(drugNumber / 28);
    drugNumber = drugNumber % 28;
    plate = parseInt(drugNumber / 7);
    drugNumber = drugNumber % 7;
    line = 0;
    space = drugNumber;
  }
  console.log(box, plate, line, space);
  box_text.innerText = box;
  plate_text.innerText = plate;
  line_text.innerText = line;
  space_text.innerText = space;
}

function resetCalculateResult(event) {
  box_text.innerText = "";
  plate_text.innerText = "";
  line_text.innerText = "";
  space_text.innerText = "";
}

drugCountForm.addEventListener("submit", drugCountSubmit);
drugCountForm.addEventListener("reset", resetCalculateResult);
