Snack 3

Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.

Risoluzione:

- Partiamo creando l'array che contiene gli oggetti relativi ad ogni singolo animale, che a loro volta avranno come proprietà il nome dell'animale, la famiglia e la classe di appartenenza.

- Creiamo un array mammiferi[] vuoto nel quale andremo ad inserire gli oggetti con classe mammifero che troveremo nell'array originale.

- Iteriamo sugli oggetti del primo array tramite un ciclo for. Ad ogni iterazione salviamo l'oggetto corrente in una variabile temporanea e controlliamo se l'attributo classe è uguale a 'mammiferi', se il risultato è positivo inseriamo l'oggetto nel secondo array, altrimenti non eseguiamo nessuna operazione e passiamo al prossimo oggetto

- Alla fine del ciclo stamperemo l'array mammiferi[]