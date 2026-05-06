function conversion() {
    var c = document.getElementById('no1').value;
    var res = document.getElementById("result")

    var fah = (c*9/5) + 32

    res.innerText = "Fah is: " + fah
}