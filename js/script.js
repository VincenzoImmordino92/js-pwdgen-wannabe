/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

/*
1.
creare le variabili tramite promnt per: nome, cognome, colore preferito e numero stringa 23

2.
stampare stinga per intero con nome cognome colore preferito e numero23
*/

const name = prompt('Scrivi il tuo nome');

const lastname = prompt('Scrivi il tuo cognome');

const color = prompt('Scrivi il tuo colore preferito');

const numero23 = '23';

const outputStr ='ciao' + name + lastname + color + numero23;

document.getElementById('output_ricevuto').innerHTML = outputStr;