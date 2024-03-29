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

// Il computer deve generare 16 numeri casuali in un array e non potranno esserci due numeri uguali



let totalClick = 0;
    

function click(points) {
    totalClick += points;

    //console.log(totalClick);
}

function difficult() {
    const difficultCoiseElement = document.getElementById("difficult_choise");
    const difficult = difficultCoiseElement.selectedIndex;
    
    console.log(difficultCoiseElement.options[difficult].text);

    return (difficultCoiseElement.options[difficult].text);
}


const startElement = document.getElementById('start');

const restartElement = document.getElementById('restart');

const grigliaElement = document.getElementById('griglia');

const selectElement = document.getElementById('select')


startElement.addEventListener('click', function(e) {

    console.log('hai cliccato start');

    // rendo invisibile lo start se cliccato
    startElement.classList.add('d-none');

    // rendo invisibile il select
    selectElement.classList.add('d-none')

    // rendo visibile il reset
    restartElement.classList.remove('d-none');

    // ricarico la pagina se clicco restart
    restartElement.addEventListener('click', function() {
        location.reload()
    })


    let limit = 0;

    let resultLimit = difficult();

    console.log(resultLimit);
    
    
    if (resultLimit == 'Easy') {
        limit = 100;
    } else if (resultLimit == 'Medium') {
        limit = 81;
    } else {
        limit = 49;
    }     
    
        
    let bombArray = [];
    for (let i = 0; i < 16; i++) {
        /* let bombNumber = bombArray[i];
        console.log(bombNumber); */
        let randomGenerated = (Math.floor(Math.random() * limit) + 1);


        if (bombArray.includes(randomGenerated)) {
            let getNewNumber = (Math.floor(Math.random() * limit) + 1);
            bombArray.push(getNewNumber);
            console.log(bombArray);

        } else {
            bombArray.push(randomGenerated);
            console.log(bombArray);
        }
    } 
    
    // ciclo
    
    for (let i = 0; i < limit; i++) {
        // genero una griglia
        const squareNumber = i + 1;
        
        // costruisco il markup
        const squareMarkup = `<div id="${squareNumber}" class="cell d-flex justify-content-center align-items-center text-white border border-white">${squareNumber}</div>`;

        // collego il markup al DOM
        grigliaElement.insertAdjacentHTML('beforeend', squareMarkup);        

        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        const cellElement = document.getElementById(squareNumber);

        // do dinamicità alla larghezza in base al limite selezionato
        cellElement.style.width =`calc(100% / ${Math.sqrt(limit)})`

        const messageLost = `<div id="gameover" class="position-absolute start-50 translate-middle-x text-white bg-danger rounded-4 shadow p-4 mt-5">YOU LOSE</div>`;

        if (bombArray.includes(squareNumber)) {
            cellElement.addEventListener('click', function(){

                console.log('hai cliccato la casella numero ' + (squareNumber));
                cellElement.classList.add('bg-danger');
                
                cellElement.innerHTML = '💣';
                
                console.log('YOU LOSE');
                console.log(`hai scoperto ${totalClick} caselle`);

                grigliaElement.insertAdjacentHTML('afterbegin', messageLost);

                

            })
        } else {
                cellElement.addEventListener('click', function(){
                
                    if (cellElement.classList.contains('bg-primary') === false) {
    
                        console.log('hai cliccato la casella numero ' + (squareNumber));
                        cellElement.classList.add('bg-primary');
                        click(1);
                    
                    }
                })
            }      
    } 
});



