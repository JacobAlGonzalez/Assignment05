//STEP 1
function halfNumber(num) {
    let half = num / 2
    console.log('half of'+ num + 'is' + half)
    return halfNumber
}
//STEP 2
function squareNumber(num) {
    let squaredNumber = num * num
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber)
    return squaredNumber
}
//STEP 3
function percentOf(num1, num2) {
    let percent = (num1/num2) * 100
    console.log(num1 + ' is ' + percent + '% of ' + num2)
    return percent
}
percentOf(5, 10)
//STEP 4
function findModulus(num1, num2) {
    let modulus = num1 % num2;
    console.log(modulus + " is the modulus of " + num1 + " and " + num2)
    return modulus
}
    //STEP 5