

// 1. Dodanie nowego elementu przy ładowaniu strony 
const data_biezaca = new Date();
const dni = data_biezaca.getDate();
let miesiace;
if (data_biezaca.getMonth() < 10) {
    miesiace = "0" + (data_biezaca.getMonth() + 1)
} else {
    miesiace = (data_biezaca.getMonth() + 1)
}
const rok = data_biezaca.getFullYear();
document.getElementById('currentDate').innerHTML = dni + '/' + (miesiace) + '/' + rok;


/* 2. Zmiana koloru paragrafu

Dodałam w CSS*/

/* 3. Dla chętnych: pobierz element paragrafu nr 2.
Pobierz element przycisku i uruchom na nim metodę addEventListener na zdarzenie ‚click’.
W metodzie addEventListener zmień kolor przycisku. */

const nowyKolor = document.getElementById("paragraph-for-button");

changeColorBtn.addEventListener('click', function() {
    nowyKolor.style.color = "green";
}
);
