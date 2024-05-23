'use strict'

//Array che contiene gli oggetti relative alle varie persone

const people = [
    {
        name: 'Giovanni',
        lastName: 'Rossi',
        age: 27,
    },
    {
        name: 'Eleonora',
        lastName: 'Bianchi',
        age: 15,
    },
    {
        name: 'Virginia',
        lastName: 'Verdi',
        age: 20,
    },
    {
        name: 'Federico',
        lastName: 'Gialli',
        age: 55,
    },
    {
        name: 'Anna',
        lastName: 'neri',
        age: 25,
    },
    {
        name: 'Viola',
        lastName: 'Violi',
        age: 13,
    },
    {
        name: 'Andrea',
        lastName: 'Magenta',
        age: 30,
    },

]

//Stampa di controllo dell'array appena creato

console.log('people', people);

//Creazione secondo array che conterrà il risultato dell'elaborazione

const peopleDriveAge = [];

//Ciclo for per iterare sui vari oggetti dell'array people[] e per popolare l'array peopleDriveAge[]

for (let i = 0; i < people.length; i++) {

    //Copiamo l'oggetto all'indice corrente di people[] in un oggetto temporaneo
    const currentPerson = people[i];

    //Verifichiamo se la persona ha un'età minore di 18
    if (currentPerson.age < 18) {

        currentPerson.driveAge = `${currentPerson.name} ${currentPerson.lastName} non è maggiorenne, quindi non può guidare`;

    } else {

        currentPerson.driveAge = `${currentPerson.name} ${currentPerson.lastName} è maggiorenne, quindi può guidare se ha una patente valida`;


    }

    //Pushamo l'oggeto temporaneo nell'array peopleDriveAge[]

    peopleDriveAge.push(currentPerson);


}

//Stampiamo l'array peopleDriveAge

console.log('peopleDriveAge', peopleDriveAge);