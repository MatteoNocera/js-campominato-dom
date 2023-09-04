/*
Consegna

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
pensiamo a queli strumenti ci servono, ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Eventuali validazioni e i controlli possiamo farli anche in un secondo momento.
Io sono a vs disposizione via Tickets fino alle 13. Mi raccomando, non sprecate quest'ora e mezza di lavoro ma iniziate subito a lavorare.
Confermate lettura come al solito e buon divertimento :baby-yoda:

*/


const startElement = document.getElementById('start');

const restartElement = document.getElementById('restart');

const grigliaElement = document.getElementById('griglia');

startElement.addEventListener('click', function(e) {

    console.log('hai cliccato start');

    // rendo invisibile lo start se cliccato
    startElement.classList.add('d-none');
    restartElement.classList.remove('d-none');

    // ricarico la pagina se clicco restart
    restartElement.addEventListener('click', function() {
        location.reload()
    })
    
    // ciclo
    let limit = 100;
    for (let i = 0; i < limit; i++) {
        // genero una griglia
        const squareNumber = i;
        
        // costruisco il markup
        const squareMarkup = `<div id="${i + 1}" class="cell d-flex justify-content-center align-items-center text-white border border-white">${squareNumber + 1}</div>`;

        // collego il markup al DOM
        grigliaElement.insertAdjacentHTML('beforeend', squareMarkup);

        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        const cellElement = document.getElementById(i + 1);

        cellElement.addEventListener('click', function(){
            console.log('hai cliccato la casella numero ' + (squareNumber + 1));
            cellElement.classList.toggle('bg-primary')
        })
        
    }
    
});


