const users= [
    { id: 101, name: "Kashif", role: "Vendor"},
    { id: 102, name: "Emily", role: "User"},
    { id: 103, name: "Saad", role: "Admin"},
    { id: 104, name: "Alina", role: "User"},
    { id: 105, name: "Ali", role: "Admin"}
]

showUsers(users)

function showUsers(users) {
    let tbody = document.getElementById("tbody");

    users.map((user) => {
        tbody.innerHTML += `
        <tr>
            <td> ${user.id} </td>
            <td> ${user.name} </td>
            <td> ${user.role} </td>
        </tr>
        `
    })

    let role = "User"
    // const filteredData = users.filter((user) => user.role == role)
    // console.log(filteredData)

    // const user = users.find((usr) => usr.role == role)
    // console.log(user)
}

function getSelectedData() {
    let selectedRole = document.getElementById("role").value
    
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    if (selectedRole === "all") {
        showUsers(users);
    } else {
        const filteredData = users.filter((user) => user.role == selectedRole)
        showUsers(filteredData)
    }
}