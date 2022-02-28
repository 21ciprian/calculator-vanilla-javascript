const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const dataPreviousOperand = document.querySelector('[data-previous-operand]')
const dataCurrentOperand = document.querySelector('[data-current-operand]')
class Calculator {
	constructor(dataPreviousOperand, dataCurrentOperand) {
		this.dataPreviousOperand = dataPreviousOperand
		this.dataCurrentOperand = dataCurrentOperand
		this.clearDisplay()
	}
	clearDisplay() {
		this.currentOperand = ''
		this.previousOperand = ''
		this.operation = undefined
	}
	deleteDisplay() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1)
	}
	addNumberToScreen(number) {
		if (number === '.' && this.currentOperand.includes('.')) return
		this.currentOperand = this.currentOperand.toString() + number.toString()
	}
	chooseOperation(operation) {
		if (this.currentOperand === '') return
		if (this.previousOperand !== '') {
			this.calculate()
		}
		this.operation = operation
		this.previousOperand = this.currentOperand
		this.currentOperand = ''
	}
	calculate() {
		let calculation
		const previous = parseFloat(this.previousOperand)
		const current = parseFloat(this.currentOperand)
		if (isNaN(previous) || isNaN(current)) return
		switch (this.operation) {
			case '+':
				calculation = previous + current
				break
			case '-':
				calculation = previous - current
				break
			case 'x':
				calculation = previous * current
				break
			case '/':
				calculation = previous / current
				break
			default:
				return
		}
		this.currentOperand = calculation
		this.operation = undefined
		this.previousOperand = ''
	}
	getDisplayNumber(number) {
		const stringNumber = number.toString()
		const integerDigits = parseFloat(stringNumber.split('.')[0])
		const decimalDigits = stringNumber.split('.')[1]
		let integerDisplay
		if (isNaN(integerDigits)) {
			integerDisplay = ''
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {
				maximumFractionDigits: 0,
			})
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`
		} else {
			return integerDisplay
		}
	}
	updateDisplay() {
		this.dataCurrentOperand.innerText = this.getDisplayNumber(
			this.currentOperand
		)
		if (this.operation != null) {
			this.dataPreviousOperand.innerText = `${this.getDisplayNumber(
				this.previousOperand
			)} ${this.operation}`
		} else {
			this.dataPreviousOperand.innerText = ''
		}
	}
}

const calculator = new Calculator(dataPreviousOperand, dataCurrentOperand)
numberButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.addNumberToScreen(button.innerText)
		calculator.updateDisplay()
	})
})
