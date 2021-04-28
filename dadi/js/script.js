// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// generare un numero casuale da uno a sei

// per generarlo possiamo prenderlo da un Array
// possiamo rendere obbligatorio questo anche per l'utente? il numero dovrà per forza essere incluso tra 1 e 6

var dado = [1,2,3,4,5,6];

var numberPlayer = dado[Math.floor(Math.random()*dado.length)];
var numberPc = dado[Math.floor(Math.random()*dado.length)];

document.getElementById("numero_utente").innerHTML = numberPlayer;
document.getElementById("numero_pc").innerHTML = numberPc;


console.log(numberPlayer);
console.log(numberPc);

var playerWins = false;
var draw = false;

if (numberPlayer > numberPc) {
    playerWins = true;
    console.log()
} else if (numberPlayer == numberPc) {
    draw = true;
}

if (playerWins) {
    document.getElementById("esito").innerHTML = "Hai vinto!"
} else if (draw) {
    document.getElementById("esito").innerHTML = "Pareggio!"
} else {
    document.getElementById("esito").innerHTML = "Hai perso!"
}

