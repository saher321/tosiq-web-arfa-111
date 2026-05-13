showColors();
function showColors() {
    const colors = ["Yellow", "Purple", "Green", "Blue", "Orange"]
    let clrList = document.getElementById("colorList")

    colors.map((elem) => {
        clrList.innerHTML += `<option> ${elem} </option>`
    })
}