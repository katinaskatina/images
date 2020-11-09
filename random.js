var competitors1 = []; //Первая половина участников 
var competitors2 = []; //Вторая половина участников
var sectors = []; //Секторы
var rounds = []; //Раунды


var object1 = {
    roundNumber: null, 
    competitorNumber: null,
    sectorNumer: null
}


//ПЕРЕмЕЩАЕМ ДАННЫЕ МАССИВА "СЕКТОРЫ" ПО КРУГУ
function getNewSectors(){
    var step = 1; //Шаг перемещения массива
    for(i = 0; i < step; i++) sectors.unshift(sectors.pop());
}

//ПЕРЕМЕШИВАЕМ ЗАДАННОЕ КОЛИЧЕСТВО СЕКТОРОВ
function shuffleSectors(array){
    for (let i = array.length - 1; i > 0; i--){
        let previousNum = Math.floor(Math.random() * (i + 1));
        [array [i], array [previousNum]] = [array [previousNum], array [i]]
    }

}

//ПОЛУЧАЕМ КОЛИЧЕСТВО СЕКТОРОВ
function createSectors() {
    for (let i = 1; i <= 12; i++) {
        sectors.push(i);
    }
}

//ПОЛУЧАЕМ КОЛИЧЕСТВО РАУНДОВ
function createRounds() {
    for (let i = 1; i <= 8; i++) {
        rounds.push(i);
    }
}

//ПОЛУЧАЕМ ПЕРВУЮ ПОЛОВИНУ УЧАСТНИКОВ
function createCompetitors1() {
    for (let i = 1; i <= 12; i++) {
        competitors1.push(i);
    }
}

//ПОЛУЧАЕМ ВТОРУЮ ПОЛОВИНУ УЧАСТНИКОВ
function createCompetitors2() {
    for (let i = 13; i <= 24; i++) {
        competitors2.push(i);
    }
}


createCompetitors1();
createCompetitors2();
createSectors();
createRounds();
shuffleSectors(sectors);
getNewSectors();

console.log(sectors);
getNewSectors();
console.log(sectors);
getNewSectors();
console.log(sectors);