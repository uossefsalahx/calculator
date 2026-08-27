function calculate(operator) {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const resultDiv = document.getElementById('result');

  if (num1 === '' || num2 === '') {
    resultDiv.textContent = '⚠️ Please enter both numbers!';
    resultDiv.className = 'result error';
    return;
  }

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = '⚠️ Invalid input!';
    resultDiv.className = 'result error';
    return;
  }

  let result;
  let operatorSymbol;

  switch (operator) {
    case '+': result = a + b; operatorSymbol = '+'; break;
    case '-': result = a - b; operatorSymbol = '−'; break;
    case '*': result = a * b; operatorSymbol = '×'; break;
    case '/':
      if (b === 0) {
        resultDiv.textContent = '⚠️ Cannot divide by zero!';
        resultDiv.className = 'result error';
        return;
      }
      result = a / b; operatorSymbol = '÷'; break;
  }

  resultDiv.textContent = `${a} ${operatorSymbol} ${b} = ${result}`;
  resultDiv.className = 'result success';
}

function reset() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('result').className = 'result';
  document.getElementById('num1').focus();
}