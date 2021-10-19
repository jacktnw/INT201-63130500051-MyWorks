function toCelsius(fahrenheit){
    
    let value = (fahrenheit - 32 ) * 5 / 9
    return value.toFixed(2) + " °C";
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = value
}
function toFahrenheit(celsius){
    
    let value = celsius * 9 / 5 + 32
    return value.toFixed(2) + " °F";
}

function toCelsiusProgram(value){
    alert(toCelsius(value))
}

function toFahrenheitProgram(value){
    alert(toFahrenheit(value))
}


    

















// while(prompt("ถ้าจะออก กรุณาพิมพ์ Exit ") != "Exit"){
//     document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Exit" + "<br>"
// }