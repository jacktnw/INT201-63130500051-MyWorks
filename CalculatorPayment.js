function Payment(totalPrice, custPay){
    let exchange = custPay - totalPrice;
    console.log('เงินทอน :'+' '+exchange +' '+'บาท');
    let bank = {
        bank_500_BTH : 0, 
        bank_100_BTH : 0, 
        bank_50_BTH : 0,  
        bank_20_BTH : 0, 
        coin_10_BTH : 0,  
        coin_5_BTH : 0, 
        coin_2_BTH : 0, 
        coin_1_BTH : 0
    }

    while(exchange > 0){
        if(exchange >= 500){
            exchange = exchange-500;
            bank.bank_500_BTH++;
        } else if(exchange >= 100){
            exchange = exchange-100;
            bank.bank_100_BTH++;
        } else if(exchange >= 50){
            exchange = exchange-50;
            bank.bank_50_BTH++;
        } else if(exchange >= 20){
            exchange = exchange-20;
            bank.bank_20_BTH++;
        } else if(exchange >= 10){
            exchange = exchange-10;
            bank.coin_10_BTH++;
        } else if(exchange >= 5){
            exchange = exchange-5;
            bank.coin_5_BTH++;
        } else if(exchange >= 2){
            exchange = exchange-2;
            bank.coin_2_BTH++;
        } else {
            exchange = exchange-1;
            bank.coin_1_BTH++;
        }
    }

    for(let money in bank){
        if(bank[money] != 0){
        console.log(`${money} : ${bank[money]}`)
        }
    }
    //return ;
}

console.log(Payment(200,1000))
console.log('-----------------')
console.log(Payment(124,500))
console.log('-----------------')
console.log(Payment(48,100))
