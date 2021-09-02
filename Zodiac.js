let year = 2001;
console.log(year)

switch(year%12){
case 0:
    animal = 'Monkey'
    break;
case 1:
    aniaml = 'Rooster'
    break;
case 2:
    aniaml = 'Dog'
    break;
case 3:
    animal = 'Pig'
    break;
case 4:
    aniaml = 'Rat'
    break;
case 5:
    aniaml = 'Ox'
    break;
case 6:
    aniaml = 'Tiger'
    break;
case 7:
    aniaml = 'Rabbit'
    break;
case 8:
    aniaml = 'Dragon'
    break;
case 9:
    animal = 'Snake'
    break;
case 10:
    aniaml = 'Horse'
    break;
case 11:
    aniaml = 'Sheep'
    break;
}
console.log(animal)



/*function zodiac(year) {

    let zodiac = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horses','sheep']

    let date = new Date;

    year = date.getFullYear() < year?year - 543:year;

    return zodiac[year%12];

}

console.log(zodiac(2001));

console.log(zodiac(2544)); */