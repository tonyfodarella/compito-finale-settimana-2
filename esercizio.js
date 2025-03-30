
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 --------------------------------------------------------------------------------------------------------------------------------------
Stringa (String): Parole o frasi racchiuse tra virgolette.
Esempio: "Ciao".

Numero (Number): Numeri, sia interi che decimali.
Esempio: 10 o 3.14.

Booleano (Boolean): Può essere vero (true) o falso (false).
Esempio: true.

Oggetto (Object): Un contenitore per diverse informazioni, come un nome e un'età.
Esempio: { nome: "Mario", eta: 10 }.

Array (Array): Una lista di cose messe insieme in ordine.
Esempio: [1, 2, 3].

Null: Un contenitore vuoto, che non ha valore.
Esempio: null.

Indefinito (Undefined): Quando una variabile non ha ancora un valore.
Esempio: undefined.

Simbolo (Symbol): Un'etichetta unica usata per identificare qualcosa.
Esempio: Symbol("id").

BigInt: Numeri enormi, più grandi di quelli normali.
Esempio: 12345678901234567890n.
*/
--------------------------------------------------------------------------------------------------------
/* ESERCIZIO 2
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;

console.log(somma); // Stampa il risultato: 32

-------------------------------------------------------------------------------------------------------

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let prova = 12

--------------------------------------------------------------------------------------------------------

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Tony Fodarella'

--------------------------------------------------------------------------------------------------------

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


let x = 12;
let risultato = 4 - x;

console.log(risultato); // Stampa il risultato: -8

---------------------------------------------------------------------------------------------------------

/* ESERCIZIO 6
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

// Verifica se name1 è diverso da name2
let sonoDiversi = name1 !== name2;
console.log(sonoDiversi);
// Stampa "true" perché "john" e "John" sono diversi

// Trasforma name1 in minuscolo e verifica se sono uguali
let sonoUguali = name1.toLowerCase() === name2.toLowerCase();
console.log(sonoUguali); 
// Stampa "true" perché entrambi diventano "john" in minuscolo


---------------------------------------------------------------------------------------------------------

