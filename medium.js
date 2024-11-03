document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll('.m g');
    let intervalId = null;

    // Funzione per far apparire/scomparire un numero casuale di lettere
 const toggleSomeLetters =  function () {
        // Resetta tutte le lettere a visibili
        letters.forEach(letter => {
            letter.classList.add('visible');
            letter.classList.remove('hidden');
        });

        // Seleziona un numero casuale di lettere (tra 1 e il 20% delle lettere)
        const numLettersToToggle = Math.floor(Math.random() * (letters.length * 0.2)) + 1;
        const lettersToToggle = Array.from(letters)
            .sort(() => 0.5 - Math.random())
            .slice(0, numLettersToToggle);

        // Nasconde le lettere selezionate
        lettersToToggle.forEach(letter => {
            letter.classList.add('hidden');
            letter.classList.remove('visible');

            // Dopo 1 secondo, rendi di nuovo visibile la lettera
            setTimeout(() => {
                letter.classList.add('visible');
                letter.classList.remove('hidden');
            }, 1000);
        });
    }

    // Funzione per avviare o fermare il ciclo in base alla larghezza della finestra
    function checkWindowSize() {
        if (window.innerWidth >= 462) {
            // Se la finestra è abbastanza larga e l'intervallo non è attivo, lo avvia
            if (!intervalId) {
                intervalId = setInterval(toggleSomeLetters, 1000);
            }
        } else {
            // Se la finestra è troppo piccola, ferma l'intervallo e ripristina la visibilità
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
                letters.forEach(letter => {
                    letter.classList.add('visible');
                    letter.classList.remove('hidden');
                });
            }
        }
    }

    // Controlla la dimensione della finestra all'avvio
    checkWindowSize();

    // Aggiungi un event listener per controllare il ridimensionamento della finestra
    window.addEventListener('resize', checkWindowSize);






 // Funzione per gestire lo stato della navbar in base allo scroll
// Funzione per gestire lo stato della navbar e del bottone in base allo scroll
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const button = document.querySelector('.getStarted'); // Seleziona il bottone

    const scrolled = window.scrollY > 150;

    if (window.innerWidth > 1023) {
        // Cambia stato della navbar
        navbar.classList.toggle('scrolled', scrolled);
        
        // Cambia colore del bottone
        if (scrolled) {
            button.classList.add('scrolled-button');
        } else {
            button.classList.remove('scrolled-button');
        }
    } else {
        navbar.classList.remove('scrolled');
        button.classList.remove('scrolled-button');
    }
}

// Funzione di inizializzazione per aggiungere l'event listener
function initScrollListener() {
    window.addEventListener('scroll', handleScroll);
}

// Chiamata alla funzione per iniziare il listener
initScrollListener();


});
