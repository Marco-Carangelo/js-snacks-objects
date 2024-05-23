Snack4

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

Risoluzione:

- Iniziamo creando un array people[] che contiene gli oggetti relativi alle varie persone ed attribuiamo ad ogni oggetto le prorietà nome, cognome ed età.

- Creiamo un secondo array peopleDriveAge[] vuoto dove andremo ad inserire i nuovi oggetti durante l'elaborazione

- Iteriamo sugli oggetti del primo array tramite un ciclo For. Per ogni iterazione copieremo i primi due attributi(nome e cognome) dell'oggetto all'indice corrente di people[i] in una variabile temporanea.
 Dopodichè creeremo un terzo attributo che avrà una frase differente a seconda del valore dell'attributo età. Useremo una struttura if else per verificare se l'attributo età è minore di 18 e, seconda del risultato, andremo a creare una stringa tramite interpolazione, che conterrà nome e cognome della persona e l'indicazione se possa guidare o meno. Salveremo questa stringa nel terzo attributo della variabile temporanea e poi pusheremo la variabile nell'array  peopleDriveAge[i];

 - Stampiamo in console l'array  peopleDriveAge[]