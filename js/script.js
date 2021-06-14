//TODO 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//TODO 2 Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//TODO 3 Creare un array di oggetti di studenti.
//TODO 4 Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//TODO 5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//* 1
var studente = {
    nome: 'Matteo',
    cognome: 'Rizza',
    eta: 24
};

//* 2
for(var k in studente){
    console.log(studente[k]);
}

//* 3
var studenti = [
    {
        nome: 'Matteo',
        cognome: 'Rizza',
        eta: 24
    },
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 30
    },
    {
        nome: 'Gino',
        cognome: 'Rua',
        eta: 70
    },
    {
        nome: 'Pippo',
        cognome: 'Verdi',
        eta: 20
    },
]


//* 4
for(var i = 0; i < studenti.length; i++){
    for(var k in studenti[i]){
        if(k != 'eta'){
            console.log(studenti[i][k]);
        }
    }
}

//* 5
var nuovoStudente = {};
nuovoStudente.nome = prompt('Inserisci il nome del nuovo studente');
nuovoStudente.cognome = prompt('Inserisci il cognome del nuovo studente');
nuovoStudente.eta = parseInt(prompt('Inserisci l\'età del nuovo studente'));

studenti.push(nuovoStudente);
console.log(studenti);