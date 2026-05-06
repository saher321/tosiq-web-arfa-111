function findEvenOdd () {
    var no1 = document.getElementById("number1").value
    var result = document.getElementById("result");

    if (no1 % 2 == 0) { // when condition will be true
        result.innerText = "Given number is Even";
    } else { // when condition will be false
        result.innerText = "Given number is Odd";
    }
}