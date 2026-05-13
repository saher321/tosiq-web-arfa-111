showColors();
function showColors() {
    const colors = ["Yellow", "Purple", "Green", "Blue", "Orange"]
    let clrList = document.getElementById("colorList")

    colors.map((elem) => {
        clrList.innerHTML += `<option> ${elem} </option>`
    })

    document.body.style.backgroundColor = localStorage.getItem('bgColor')
}

function applyColor() {
    let clr = document.getElementById("colorList").value;
    // console.log(clr)
    document.body.style.backgroundColor = clr

    localStorage.setItem("bgColor", clr)
}