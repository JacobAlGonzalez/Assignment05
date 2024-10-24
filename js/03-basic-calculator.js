// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    if (operation === 'add') {
        return x + y
    } else if (operation === 'subtract') {
        return x - y
    } else if (operation === 'multiply') {
        return x * y
    } else if (operation === 'divide') {
        if (y !== 0) {
            return x / y
        } else {
            alert("Error: Cannot divide by zero.")
            return null
        }
    } else {
        alert("Invalid operation! Please enter add, subtract, multiply, or divide.")
        return null
    }
}

function runCalculator() {
    let x, y, operation

    do {
        // COLLECT FIRST NUMBER FROM USE
        x = parseFloat(prompt("Enter the first number:"))
        // COLLECT SECOND NUMBER FROM USER
        y = parseFloat(prompt("Enter the second number:"))
        // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        operation = prompt("Enter the operation (add, subtract, multiply, divide):").toLowerCase()

        const result = calculate(x, y, operation)
        if (result !== null) {
            alert(`The result of ${operation}ing ${x} and ${y} is: ${result}`)
            break
        }
    } while (true)
}
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
runCalculator()