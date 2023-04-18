/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

//crea un array vuoto
let arrOdd = [];

//Chiedi per 6 volte all’utente di inserire un numero
for(i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt('Scrivi un numero'));
    if (userNumber % 2 !== 0) {
        arrOdd.push(userNumber);
    } 
    console.log(arrOdd)
};



