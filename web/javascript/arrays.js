// indexes        0      1    2      3         4
const list = [ 
    "Purple", 23, true, "White", "Yellow", 
    {user: "userno123", email: "user123@email.com"} 
];
// console.log(list[5])

const colors = [ "Cyan", "Red", "Brown", "Blue" ]
const cities = [ "Lahore", "Multan", "Islamabad", "Karachi" ]
colors.push("Green")
console.log("Colors:", colors)
// const newList = [ ...colors, ...cities, "Ali" ]

const newList = colors.concat(cities)

console.log(newList)

const array1 = [ "Ali", "Usman", [ "Abubakar", "Bilal" ],[ "White", "Red" ] ]

const array2 = array1.flat();
console.log(array2)