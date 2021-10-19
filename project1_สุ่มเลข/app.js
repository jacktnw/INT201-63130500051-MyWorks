let lottoNumber = prompt("กรอกเลขที่ต้องการ : ")
let random_number =  517 //Math.floor(Math.random() *1000)
document.getElementById("yourNum").innerHTML = (lottoNumber)
//console.log(Math.floor(Math.random() *1000)) 
//Math.random มันจะสุ่มเลข 0-1 เลยต้องเอาไป *10 เพื่อเป็นจน.เต็ม
//Math.floor จะปัดเศษลง
document.getElementById("random").innerHTML = random_number
if(lottoNumber == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วย ! คุณถูกเลขท้าย 3 ตัว"
}
else {
    document.getElementById("result").innerHTML = "เสียใจด้วย T-T คุณไม่ถูกรางวัลเลขท้าย 3 ตัว"
}



// let age = prompt("อายุของคุณ : ")
// if(age == 12){
//     console.log("ไปเรียน ป.6 นะ")
// }
// else if(age == 13){
//     console.log("ไปเรียน ม.1 นะ")
// }