let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sun = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma: " + sun)
alert("Subtração: " + sub)
alert("Miltiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)

if(sun%2 == 0){
	alert("É um número Par: " + sun);
} else {
	alert("É um número Impar: " + sun);
}

if(firstNumber == secondNumber) {
    alert("Os dois números são iguais!")
} else if(firstNumber != secondNumber) {
    alert("Os dois números são diferentes!")
}





