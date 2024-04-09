// collect the user inputs
// AKA the Entry Point
function getValues() {
    // get the <input /> element for the startNumber and grab its value
    let startInputElement = document.getElementById('startNumber');
    let startNumber = startInputElement.value;

    // do the same thing for the endNumber
    let endNumber = document.getElementById('endNumber').value;

    startNumber = Number(startNumber);
    endNumber = Number(endNumber);

    let generatedNumbers = generateValues(startNumber, endNumber);

    displayValues(generatedNumbers);
}

// generate a list of numbers between those two values
function generateValues(start, end) {
    let numbers = [];

    for (let i = start; i <= end; i = i + 1) {
        numbers.push(i);
    }

    return numbers;

}

// display those numbers in my results table 
function displayValues(numberArray) {  

    let tableHtml = '';

    for (let index = 0; index < numberArray.length; index = index + 1) {

        let number = numberArray[index];

        tableHtml = tableHtml + '<tr><td>' + number + '</td></tr>';

    }

    let tbody = document.getElementById('results');
    tbody.innerHTML = tableHtml;

}