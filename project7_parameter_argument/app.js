function sayHello(userName, userLastname){
    return "สวัสดี " + userName + " " + userLastname 
}

function getAge(){
    return 20
}
let userInput = prompt("Input your name: ")
alert(sayHello(userInput, "SIT"))
