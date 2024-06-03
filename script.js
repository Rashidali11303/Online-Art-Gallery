function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const precision = document.querySelector('input[name="precision"]:checked').value;
    
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    }

    if (precision === 'integer') {
        result = Math.round(result);
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
