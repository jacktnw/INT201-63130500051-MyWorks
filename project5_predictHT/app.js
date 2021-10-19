let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
let point = 0
for(var i = 0; i < round; i++){
    var answer = prompt("หัว กรือ ก้อย พิมพ์มาเลย!")
    var random_answer = ""
    //point = point + parseInt(sum)
    if(Math.floor(Math.random() * 10) <= 4 ){
        //หัว
        random_answer = "หัว"

    } else{
        //ก้อย
        random_answer = "ก้อย"
    }

    if( answer == random_answer){
        alert("ตอบถูก ! ยินดีด้วย")
        sum = "ชนะ"
        point++

    } else{
        alert("ตอบผิด ! เสียใจด้วย")
        sum = "แพ้"
        
    }
    
    console.log(random_answer + " : " + answer +"  |  " + point)

    document.getElementById("game-list").innerHTML +="คุณเลือก -> "+ answer + "  |  " +"ผลที่ออก -> "+ random_answer + " || " + "ผลแพ้ชนะ : "+ sum  + "<br>"

    document.getElementById("result").innerHTML = "รวมคะแนนทั้งหมด: " + point + " คะแนน"

}


