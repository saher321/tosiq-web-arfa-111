function findDay() {
    var no = document.getElementById("dayno").value;
    if (!no) {
        console.log("Please fill the field")
        return;
    }
    switch(no){
        case "1":
            console.log("Monday");
            break;
        case "2":
            console.log("Tuesday");
            break;
        case "3":
            console.log("Wednesday");
            break;
        case "4":
            console.log("Thursday");
            break;
        default:
            console.log("Invalid day number")

    }
}