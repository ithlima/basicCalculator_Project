const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.op');
const clean = document.querySelector('#clean');
const result = document.querySelector('#equal');

let currentInput = '';
let operator = '';
let previousInput = '';

//Atualizar tela
function updateScreen(value) {
  screen.textContent = value;
}

 //Adicionar os números na tela
numbers.forEach(num =>{
  num.addEventListener("click", () =>{
    currentInput += num.value;
    updateScreen(currentInput);
  })
})
//Adicionar as operações na tela
operators.forEach(op => {
  op.addEventListener("click", () => {
    if (currentInput !== '') {
      previousInput = currentInput;
      currentInput = '';
      operator = op.value;
    }
  });
});
//Limpar a tela
clean.addEventListener("click", () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateScreen('');  // Limpar a tela
});
// Calcular o resultado
result.addEventListener("click", () => {
  if (previousInput !== '' && currentInput !== '' && operator !== '') {
    const calculation = eval(`${previousInput} ${operator} ${currentInput}`);
    updateScreen(calculation);  // Mostrar o resultado
    currentInput = calculation.toString();  // Usar o resultado em novos cálculos
    previousInput = '';
    operator = '';
  }
});