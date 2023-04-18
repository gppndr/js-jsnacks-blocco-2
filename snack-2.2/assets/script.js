/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// array dei nomi
let arrName = [
    'Mario',
    'Manuel',
    'Tina',
    'Diana',
    'Serafina',
    'Claudia',
    'Costantino',
    'Dolores',
];

//array dei cognomi
let arrLastName = [
    'Baroffio',
    'Bosio',
    'Folliero',
    'Tomaselli-Filogamo',
    'Valmarana',
    'Tasso',
    'Lamborghini',
    'Coardi',
];

//array dei nomi e cognomi 
let arrNameLastName = [];

for (i = 0; i < arrName.length && arrLastName.length; i++) {
    let randomName = arrName[Math.floor(Math.random() * arrName.length)];
    let randomLastName = arrLastName[Math.floor(Math.random() * arrLastName.length)];
    console.log(randomLastName);
    let randomNameLastName = randomName + " " + randomLastName;
    arrNameLastName.push(randomNameLastName);
};

console.log(arrNameLastName);