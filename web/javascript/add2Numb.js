function addNumbers() {
    var number1 = document.getElementById('no1').value;
    var number2 = document.getElementById('no2').value;
    var res = document.getElementById("result")

    var sum = Number(number1) + Number(number2)

    res.innerText = "Sum is: " + sum
}