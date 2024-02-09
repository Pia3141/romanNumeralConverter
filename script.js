const numberInput = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const splitNumber = (num) => {
  let thousands = 0;
  let hundreds = 0;
  let tens = 0;
  let ones = 0;
  const numArray = [];

  thousands = Math.floor(num / 1000);
  numArray.push(thousands);
  num -= thousands * 1000;

  hundreds = Math.floor(num / 100);
  numArray.push(hundreds);
  num -= hundreds * 100;

  tens = Math.floor(num / 10);
  numArray.push(tens);
  num -= tens * 10;

  numArray.push(num);

  return numArray;
};

const convert = (num) => {
  const numberArr = splitNumber(num);
  const resultArr = [];
  let stringM = "m";
  let stringC = "c";
  let stringD = "d";
  let newHundred = numberArr[1] - 5;
  let stringX = "X";
  let stringL = "L";
  let newTens = numberArr[2] - 5;
  let stringI = "i";
  let stringV = "v";
  let newOne = numberArr[3] - 5;

  if (numberArr[0] >= 1) {
    resultArr.push(stringM.repeat(numberArr[0]));
  }

  switch (numberArr[1]) {
    case 1:
    case 2:
    case 3:
      resultArr.push(stringC.repeat(numberArr[1]));
      break;
    case 4:
      resultArr.push(stringC, stringD);
      break;
    case 5:
      resultArr.push(stringD);
      break;
    case 6:
    case 7:
    case 8:
      resultArr.push(stringD);
      resultArr.push(stringC.repeat(newHundred));
      break;
    case 9:
      resultArr.push(stringC, stringM);
      break;
    default:
      break;
  }

  switch (numberArr[2]) {
    case 1:
    case 2:
    case 3:
      resultArr.push(stringX.repeat(numberArr[2]));
      break;
    case 4:
      resultArr.push(stringX, stringL);
      break;
    case 5:
      resultArr.push(stringL);
      break;
    case 6:
    case 7:
    case 8:
      resultArr.push(stringL);

      resultArr.push(stringX.repeat(newTens));
      break;
    case 9:
      resultArr.push(stringX, stringC);
      break;
    default:
      break;
  }

  switch (numberArr[3]) {
    case 1:
    case 2:
    case 3:
      resultArr.push(stringI.repeat(numberArr[3]));
      break;
    case 4:
      resultArr.push(stringI, stringV);
      break;
    case 5:
      resultArr.push(stringV);
      break;
    case 6:
    case 7:
    case 8:
      resultArr.push(stringV);
      resultArr.push(stringI.repeat(newOne));
      break;
    case 9:
      resultArr.push(stringI, stringX);
      break;
    default:
      break;
  }

  console.log(resultArr);
  return resultArr.join("").toUpperCase();
};

const showResult = () => {
  const inputNum = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputNum)) {
    output.textContent = "Please enter a valid number";
    return;
  } else if (inputNum < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputNum >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  } else {
    output.textContent = convert(inputNum);
  }
};
button.addEventListener("click", showResult);
