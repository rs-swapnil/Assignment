
var number1 = 10;
var number2 = 11;
var sum, sub, mul, division;

document.getElementById("n1").innerHTML = "Number 1 &nbsp:&nbsp" + number1;
document.getElementById("n2").innerHTML = "Number 2 &nbsp:&nbsp" + number2;

//addition
if (number1 > number2 || number1 < number2) {
    sum = number1 + number2;
    console.log(sum);
    document.getElementById("add").innerHTML =
        "<b>Sum</b> of two numbers is &nbsp:&nbsp" + sum;
} else if (number1 == number2) {
    sum = number1 + number2;
    console.log(sum);
    document.getElementById("add").innerHTML =
        "<b>Sum</b> of two equal numbers &nbsp:&nbsp" + sum;
} else {
    console.log("can't perform addition");
}

//subtract
if (number1 > number2) {
    sub = number1 - number2;
    document.getElementById("sub").innerHTML =
        "<b>Subtraction</b> of number 1 and number 2 &nbsp:&nbsp" + sub;
} else if (number1 < number2) {
    sub = number2 - number1;
    document.getElementById("sub").innerHTML =
        "<b>Subtraction</b>  of number 2 and number 1 &nbsp:&nbsp" + sub;
} else {
    document.getElementById("sub").innerHTML="<p>When two numbers are same, value is zero for subtraction</p>";
    console.log("can't perform subtraction");
}

//multiply
if (number1 == number2 || number1 > number2 || number1 < number2) {
    mul = number1 * number2;
    document.getElementById("mul").innerHTML =
        "<b>Multiplication</b> of number 1 and number 2 is &nbsp:&nbsp" + mul;
}  
else {
    console.log("can't perform multiplication");
}
