function toCelsius(fahrenheit){
    
    let f_value = (fahrenheit - 32 ) * 5 / 9
    return f_value.toFixed(2) + " °C";
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = value
}
function toFahrenheit(celsius){
    
    let c_value = celsius * 9 / 5 + 32
    return c_value.toFixed(2) + " °F";
}

alert(toCelsius(120))
display("answer_fahrenheit", toCelsius(120))
alert(toFahrenheit(32))
display("answer_celsius", toFahrenheit(32))


    

















// while(prompt("ถ้าจะออก กรุณาพิมพ์ Exit ") != "Exit"){
//     document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Exit" + "<br>"
// }