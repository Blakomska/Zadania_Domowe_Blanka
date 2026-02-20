//ZADANIE DOMOWE dzień 2
//1. Utwórz tablicę i pobierz z niej ostatni element 


const tableTrees = ['dąb', 'olcha', 'brzoza', 'jesion', 'lipa', 'grab'];

const lastElement = tableTrees[tableTrees.length-1];

console.log('Ostatni element tablicy - '+ lastElement);

/*2. Napisz program, który na podstawie podanej temperatury w stopniach Celsjusza wypisze odpowiedni komunikat: 
• Jeśli temperatura jest poniżej 0, wypisz: Mróz! Ubierz się ciepło! 
• Jeśli temperatura jest od 0 do 15 włącznie, wypisz: Chłodno. Przyda się kurtka. 
• W przeciwnym razie wypisz: Ciepło! Zostaw kurtkę w domu. */

const temperature = 22;

if (temperature < 0){
    console.log('Mróz! Ubierz się ciepło!')
}
else if (temperature >= 0, temperature <= 15) {
    console.log('Chłodno. Przyda się kurtka.')
}
else {
    console.log('Ciepło! Zostaw kurtkę w domu.')
}

//3. Napisz pętlę, która wyświetli liczby nieparzyste do 20

for (n = 2; n <=20; n+=2) {
    console.log('Wypisz liczby nieparzyste pętlą - ' +(n-1));
}