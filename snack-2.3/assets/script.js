/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

//array numeri interi

let arrNumber = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
];

let arrOddNumber = 0;

for (i = 0; i < arrNumber.length; i++) {
    if (i % 2 !== 0) {
        arrOddNumber += arrNumber[i];
    }
};

console.log(arrOddNumber);