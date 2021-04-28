// scriviamo un array con dentro degli indirizzi mail
// chiediamo con un prompt l'indirizzo mail di un utente


// ci serve un ciclo for che controlli una ad una le mail dell'array
// all'interno avrà un if che ci dica se la mail coincide con una dell'array

var email = prompt("Inserisci il tuo indirizzo e-mail per controllare lo stato dell'iscrizione");
var mailingList = ["tiziocaio@gmail.com","pippo@yahoo.com","paperino@yahoo.it","federica@gmail.com","prova@dominio.it"];

for (var i = 0; i < mailingList.length; i++) {
    if (email == mailingList[i]) {
        var esito = "Sei già iscritto alla newsletter!";
    } else {
        var esito = "Non sei ancora iscritto alla newsletter!";
    }
}

document.getElementById("esito").innerHTML = esito;