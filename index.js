//document.getElementById("count-el"). innerText = 5

/*
let myAge = 6
let mySize = 8
let personality = myAge * mySize
console.log(personality)*/

//function increment () {
   // console.log("this button was clicked")
//}

/*function access (){
    console.log(1)
    console.log(2)
    console.log(3)
}
access()*/

/*let camry = 4
let mazda = 6
let truck = 9

function travelTime (){
    let driverMovement = camry + mazda + truck
    console.log(driverMovement)
}
travelTime()*/
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)


let count = 0
function increment() {
    count = count + 1
    countEl. textContent = count
}
increment()
function save(){
    let countStr = count + " - "
    saveEl . textContent += countStr
    countEl . textContent = 0
    count = 0
}
