// scriviamo un array con dentro degli indirizzi mail
// chiediamo con un prompt l'indirizzo mail di un utente


// ci serve un ciclo for che controlli una ad una le mail dell'array
// all'interno avrà un if che ci dica se la mail coincide con una dell'array

var email = prompt("Inserisci il tuo indirizzo e-mail per controllare lo stato dell'iscrizione");
var mailingList = ["tiziocaio@gmail.com","pippo@yahoo.com","paperino@yahoo.it","federica@gmail.com","prova@dominio.it"];

// l'esito di default è negativo
var esitoPositivo = false;

// registriamo l'esito positivo
for (var i = 0; i < mailingList.length; i++) {
    if (email == mailingList[i]) {
        esitoPositivo = true;
    }
}

// diamo un messaggio in base all'esito del controllo
if (esitoPositivo) {
    document.getElementById("esito").innerHTML = "Sei già iscritto alla newsletter!";
} else {
    document.getElementById("esito").innerHTML = "Non sei ancora iscritto alla newsletter!";
}
