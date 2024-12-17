// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// OUTPUT- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




// INPUT- come input chiediamo all'utente (passeggero) di inserire il numero di chilometri che vuole percorrere e l'età.
let risultato ;
// input chilometri
let chilometriUtente = parseInt(prompt("inserisci il numero di chilometri da fare (un numero)"));

// input età
let etaUtente = parseInt(prompt("inserisci una età (un numero)"));

console.log(chilometriUtente, etaUtente);


// ELABPRAZIONE calcolare il prezzo del biglietto in base ai km (0.21 € al km)
 

 // SE l'utente ha >18 <65 anni (adulto)
 if (etaUtente >18 && etaUtente <65) { 

     // ELABORAZIONE moltiplicare il numero dei chilometri per 0.21

    let risultato = (chilometriUtente * 0.21)

    console.log(risultato);

 } 
 // SE l'utente ha <18 anni (minorenne)
 // ALLORA applicare sconto del 20%
 // ELABORAZIONE moltiplicare il numero dei chilometri per 0.21 e dividere per 5

 // SE l'utente ha >65 anni (anziano)
 // ALLORA applicare sconto del 40%
 // ELABORAZIONE moltiplicare il numero dei chilometri per 0.21 ,dividere per 5 e moltiplicare per due



// OUTPUT- Mostrare prezzo finale , messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
