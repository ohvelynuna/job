class absCalculator {
    constructor(suffix) {
        this.suffix = suffix;
        this.progressBar = document.querySelector(`#resultabs-${suffix} .progress-bar`);
    }

    getValue() {
        let value = Number(document.getElementById(`inputnum-${this.suffix}`).value);
        this.progressBar.style.width = `${value}%`;
        this.progressBar.setAttribute('aria-valuenow', value*2);
        calculateBoth();
    }

    addOne() {
        const inputNum = document.getElementById(`inputnum-${this.suffix}`);
        inputNum.value = Number(inputNum.value) + 1;
        this.getValue();
        calculateBoth();
    }

    reset() {
        const inputNum = document.getElementById(`inputnum-${this.suffix}`);
        inputNum.value = 1;
        this.getValue();
        calculateBoth();
    }
}

function addBoth() {
    absCalculatorInstance.addOne();
    absCalculatorInstance_1.addOne();
    calculateBoth();
}

function calculateBoth() {
    let one = Number(document.getElementById(`inputnum-one`).value)
    let two = Number(document.getElementById(`inputnum-two`).value)
    document.getElementById('percentage-result').innerHTML = `The ${one > two ? two : one} year old SON will be ${one >= two ? (two / one) * 100 : (one / two) * 100}% of FATHER's age when FATHER is ${one > two ? one : two} years old`
    document.getElementById('age1').innerHTML = `${one >= two ? "Father's age:" : "Son's age: "}`
    document.getElementById('age2').innerHTML = `${one >= two ? "Son's age:" : "Father's age: "}`
    document.getElementById('legal').innerHTML = `${Math.abs(one - two) < 18 ? "It's illegal... Are you sure?" : ""}`
}



const absCalculatorInstance = new absCalculator('one');
const absCalculatorInstance_1 = new absCalculator('two');



let mouseDown = false;
let intervalId = null;
let addBvalue = 'add-both'
let addOne = 'add-one'
let addTwo = 'add-two'
document.getElementById('addboth-button').addEventListener('mousedown', () => mouseButtonDown(addBvalue));

document.getElementById('add-one-one').addEventListener('mousedown', () => mouseButtonDown(addOne));

document.getElementById('add-one-two').addEventListener('mousedown', () => mouseButtonDown(addTwo));

function mouseButtonDown(method) {
    if (!mouseDown && method == 'add-both') {
        mouseDown = true;
        console.log('Mouse button is held down');
        performContinuousActionAddBoth();
    }
    if (!mouseDown && method == 'add-one') {
        mouseDown = true;
        console.log('Mouse button is held down');
        performContinuousActionAddOne();
    }
    if (!mouseDown && method == 'add-two') {
        mouseDown = true;
        console.log('Mouse button is held down');
        performContinuousActionAddTwo();
    }

}

document.addEventListener('mouseup', mouseButtonUp)

function mouseButtonUp() {
    if (mouseDown) {
        stopContinuousAction();
        console.log('Mouse button is released');
    }
}

function performContinuousActionAddBoth() {
    if (!intervalId) {
        console.log('Starting continuous action');
        intervalId = setInterval(addBoth, 135); // Start repeating the action
    }
}

function performContinuousActionAddOne() {
    if (!intervalId) {
        intervalId = setInterval(() => absCalculatorInstance.addOne(), 135); // Start repeating the action
        console.log('Starting continuous action');
    }
}

function performContinuousActionAddTwo() {
    if (!intervalId) {
        intervalId = setInterval(() => absCalculatorInstance_1.addOne(), 135); // Start repeating the action
        console.log('Starting continuous action');
    }
}

function stopContinuousAction() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        mouseDown = false;
        console.log('Continuous action stopped');
    }
}

function addBoth() {
    absCalculatorInstance.addOne();
    absCalculatorInstance_1.addOne();
    calculateBoth();
}
