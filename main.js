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
}
