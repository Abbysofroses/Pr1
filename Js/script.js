let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how much films did u see", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how much films did u see", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actord: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("one of the last", ""),
              b = prompt("What is ur rating", "");
    
        if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
         
    }
}

/* rememberMyFilms(); */


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('too few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('u r tipical viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('u r good');
    } else {
        console.log('error');
    }
}

/* detectPersonalLevel(); */

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`your favorite genres in order ${i}`);
    }
}

writeYourGenres();