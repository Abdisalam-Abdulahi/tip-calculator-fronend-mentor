const amountInput = document.getElementById("amountInput");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twentyFive");
const fifty = document.getElementById("fifty");
const Custom = document.getElementById("Custom");
const numberOfpeople = document.querySelector(".numberOfpeople");
const boxChildNo1 = document.getElementById("boxChildNo1");
const boxChildNo2 = document.getElementById("boxChildNo2");
const button = document.querySelector(".button");
let inputValue = amountInput.value;
five.addEventListener("click", () => {
  const inputValue = parseFloat(amountInput.value);
  let numberOfpeoplevalue = parseInt(numberOfpeople.value);
  let result = (inputValue / 100) * 5;
  let lastResult = result / numberOfpeoplevalue;
  boxChildNo1.textContent = "$" + parseFloat(lastResult).toFixed(2);
  const totalAmount = (inputValue + result) / numberOfpeoplevalue;
  boxChildNo2.textContent = "$" + totalAmount.toFixed(2);
  Custom.value = 0;
  numberOfpeople.value = 1;
  
  
});
ten.addEventListener("click", () => {
  const inputValue = parseFloat(amountInput.value);
  const numberOfpeoplevalue = parseInt(numberOfpeople.value);

  let result = (inputValue / 100) * 10;
  let lastResult = result / numberOfpeoplevalue;
  boxChildNo1.textContent = "$" + parseFloat(lastResult).toFixed(2);
  const totalAmount = (inputValue + result) / numberOfpeoplevalue;
  boxChildNo2.textContent = "$" + totalAmount.toFixed(2);
  Custom.value = 0;
  numberOfpeople.value = 1;
  
});
fifteen.addEventListener("click", () => {
  const inputValue = parseFloat(amountInput.value);
  const numberOfpeoplevalue = parseInt(numberOfpeople.value);

  let result = (inputValue / 100) * 15;
  let lastResult = result / numberOfpeoplevalue;
  boxChildNo1.textContent = "$" + parseFloat(lastResult).toFixed(2);
  const totalAmount = (inputValue + result) / numberOfpeoplevalue;
  boxChildNo2.textContent = "$" + totalAmount.toFixed(2);
  Custom.value = 0;
  numberOfpeople.value = 1;
  
});
twentyFive.addEventListener("click", () => {
  const inputValue = parseFloat(amountInput.value);
  const numberOfpeoplevalue = parseInt(numberOfpeople.value);

  let result = (inputValue / 100) * 25;
  let lastResult = result / numberOfpeoplevalue;
  boxChildNo1.textContent = "$" + parseFloat(lastResult).toFixed(2);
  const totalAmount = (inputValue + result) / numberOfpeoplevalue;
  boxChildNo2.textContent = "$" + totalAmount.toFixed(2);
  Custom.value = 0;
  numberOfpeople.value = 1;
  
});
fifty.addEventListener("click", () => {
  const inputValue = parseFloat(amountInput.value);
  const numberOfpeoplevalue = parseInt(numberOfpeople.value);

  let result = (inputValue / 100) * 50;
  let lastResult = result / numberOfpeoplevalue;
  boxChildNo1.textContent = "$" + parseFloat(lastResult).toFixed(2);
  const totalAmount = (inputValue + result) / numberOfpeoplevalue;
  boxChildNo2.textContent = "$" + totalAmount.toFixed(2);
  Custom.value = 0;
  numberOfpeople.value = 1;
  
});
Custom.addEventListener("click", () => {
  const inputValue = parseFloat(amountInput.value);
  const numberOfpeoplevalue = parseInt(numberOfpeople.value);

  const customValue = Custom.value;
  let result = (inputValue / 100) * customValue;
  let lastResult = result / numberOfpeoplevalue;
  boxChildNo1.textContent = "$" + parseFloat(lastResult).toFixed(2);
  const totalAmount = (inputValue + result) / numberOfpeoplevalue;
  boxChildNo2.textContent = "$" + totalAmount.toFixed(2);
  
});
button.addEventListener("click", () => {
  boxChildNo1.textContent = "$" + 0.00.toFixed(2);
  boxChildNo2.textContent = "$" + 0.00.toFixed(2);
  Custom.value = 0;
  numberOfpeople.value = 1;
  amountInput.value = 0
});
