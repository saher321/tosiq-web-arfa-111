// Comparison operators
// !        Not operator
// !=       Not qual to
// >        Greater then
// <        Less then
// >=       Greater then and equal to
// <=       Less the and equal to
// ||       OR operator
// &&       AND operator
// ==       Match the values        if ( 2 != "2" ) => true
// ===      Match the values and    if ( 2 === "2" ) => false

function findEvenOdd () {
    var no1 = document.getElementById("number1").value
    var result = document.getElementById("result");

    if (no1 % 2 == 0 && no2 % 2 == 0) { // when condition will be true
        result.innerText = "Given number is Even";
    } else { // when condition will be false
        result.innerText = "Given number is Odd";
    }
}

// find positive or negative number
