function showTable() {
    var no = document.getElementById("tableno").value;

    for(var i = 1; i <= 10; i++){
        console.log(`${no} x ${i} = ${no*i}`)
    }
}