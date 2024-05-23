'use strict'

//Array contenente gli oggetti relativi ad ogni singolo animale
const animali = [
    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'ecletto',
        famiglia: 'psittacidi',
        classe: 'uccelli',
    },
    {
        nome: 'anaconda',
        famiglia: 'boidae',
        classe: 'rettili',
    },
    {
        nome: 'panda',
        famiglia: 'ursidi',
        classe: 'mammiferi',
    },
    {
        nome: 'corvo',
        famiglia: 'corvidae',
        classe: 'uccelli',
    },
    {
        nome: 'allosauro',
        famiglia: 'allosauridae',
        classe: 'sauropsida',
    },
    {
        nome: 'delfino',
        famiglia: 'delphinidae',
        classe: 'mammiferi',
    },

];

//Stampiamo in console l'array appena creato per poterne controllare i valori

console.log(animali);

//Array vuoto che conterrà solo gli oggetti con classe 'mammiferi'

const mammiferi = [];

//Ciclo For per controllare l'attributo classe degli oggetti in animali[] e popolare l'array mammiferi

for (let i = 0; i < animali.length; i++) {
    //Salviamo l'oggetto corrispondente all'indice corrente in una variabile
    const currentAnimal = animali[i];

    //Controlliamo se alla chiave classe corrisponde il valore 'mammiferi' e nel caso la condizione si verifichi pushiamo currentAnimal in mammiferi[]
    if (currentAnimal.classe === 'mammiferi') {

        mammiferi.push(currentAnimal);

    }

}

//Stampiamo in console l'array mammiferi[]

console.log(mammiferi);