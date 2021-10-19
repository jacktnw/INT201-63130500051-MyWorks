function toCelsius(){
    let fahrenheit = prompt("Fahrenheit: ")
    let f_value = (fahrenheit - 32 ) * 5 / 9
    document.getElementById("answer_fahrenheit").innerHTML = f_value.toFixed(2) + " °C";
}

function toFahrenheit(){
    let celsius = prompt("Celsius: ")
    let c_value = celsius * 9 / 5 + 32
    document.getElementById("answer_celsius").innerHTML = c_value.toFixed(2) + " °F";
}

















// while(prompt("ถ้าจะออก กรุณาพิมพ์ Exit ") != "Exit"){
//     document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Exit" + "<br>"
// }