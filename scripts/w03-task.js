/* LESSON 3 - Programming Tasks */

const buttonAddNumbers = document.getElementById('addNumbers')
buttonAddNumbers.addEventListener('click', addNumbers)
const buttonSubtractNumbers = document.getElementById('subtractNumbers')
buttonSubtractNumbers.addEventListener('click', subtractNumbers)
const buttonMultipyNumbers = document.getElementById('multiplyNumbers')
const buttonDivideNumbers = document.getElementById('divideNumbers')
buttonDivideNumbers.addEventListener('click', divideNumbers)
const buttonGetTotalDue = document.getElementById('getTotal')
buttonGetTotalDue.addEventListener('click', getTotal)

/* FUNCTIONS */
function add(num1, num2) {
	return num1 + num2
}
function subtract(num1, num2) {
	return num1 - num2
}
multiply = (num1, num2) => num1 * num2
divide = (num1, num2) => num1 / num2


/* Function Definition - Add Numbers */
function addNumbers() {
	const add1 = Number(document.getElementById('add_one').value)
	const add2 = Number(document.getElementById('add_two').value)
	const sum = document.getElementById('sum')
	sum.value = add(add1, add2)
}

/* Function Expression - Subtract Numbers */
function subtractNumbers() {
	const subtract1 = Number(document.getElementById('subtract1').value)
	const subtract2 = Number(document.getElementById('subtract2').value)
	const difference = document.getElementById('difference')
	difference.value = subtract(subtract1, subtract2)
}

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
  const product = document.getElementById('product')
	const factor1 = Number(document.getElementById('factor1').value)
	const factor2 = Number(document.getElementById('factor2').value)
	product.value = multiply(factor1, factor2)
};

buttonMultipyNumbers.addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divideNumbers() {	
	const dividend = Number(document.getElementById('dividend').value)
	const divisor = Number(document.getElementById('divisor').value)
	const quotient = document.getElementById('quotient')
	quotient.value = divide(dividend, divisor)
}

/* Decision Structure */
function getTotal() {	
	const total = document.getElementById('total')
	const member = document.getElementById('member').checked
	let subtotal = Number(document.getElementById('subtotal').value)
	if (member) {
		subtotal *= .85
	}
	total.textContent = `$${subtotal.toFixed(2)}`
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const anArray = document.getElementById("array")
const array = []
for (let index = 1; index < 14; index++) {
	array.push(index);
}
anArray.innerHTML = array

/* Output Odds Only Array */
const Odds = document.getElementById("odds")
const odds = array.filter(number => number % 2 != 0)
Odds.innerHTML = odds

/* Output Evens Only Array */
const Evens = document.getElementById("evens")
const evens = array.filter(number => number % 2 == 0)
Evens.innerHTML = evens

/* Output Sum of Org. Array */
const SumOfArray = document.getElementById("sumOfArray")
const sum = array.reduce((accumlator, currentValue) => accumlator + currentValue)
SumOfArray.innerHTML = sum

/* Output Multiplied by 2 Array */
const Multiplied = document.getElementById("multiplied")
const multiplied = array.map(number => number * 2)
Multiplied.innerHTML = multiplied

/* Output Sum of Multiplied by 2 Array */
const SumOfMultiplied = document.getElementById("sumOfMultiplied")
const sumOfMultiplied = multiplied.reduce((accumlator, currentValue) => accumlator + currentValue)
SumOfMultiplied.innerHTML = sumOfMultiplied