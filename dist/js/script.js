"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//let i = 0;
//while (i < 2) {
//    const a = prompt('Один из последних просмотренных фильмов?', ''),
//          b = prompt('На сколько оцените его?', '');
//    i++;
//    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
//        personalMovieDB.movies[a] = b;
//        console.log("Done");
//    } else {
//        console.log("Error");
//        i--;
//    }
//}

//let i = 0;
//do {
    //const a = prompt("Один из последних просмотренных фильмов?"),
    //      b = prompt("На сколько оцените его?");
    //    i++;
    //   if (a != "" && b != "" && a != null && a != null && a.length < 50) {
    //        personalMovieDB[a] = b;
    //        console.log("Done");
    //    } else {
    //        console.log("Error");
    //        i++;
    //    }

//}
//while (i < 2);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != "" && b != "" && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Error");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

console.log(personalMovieDB);

function calculateVolumeAndArea(a) {
    let b = (a * a) * a;
    let c = 6 * (a * a);
    if (isInteger(a)) {
        return (b, c);
    } else {
        console.log("При вычислении произошла ошибка");
        }
    }
console.log(calculateVolumeAndArea("5"));

function calculateVolumeAndArea(a) {
    let b = (a * a) * a;
    let c = (a * a) * 6;
    if (Number.isInteger(a)) {
        console.log(b, c);
    } else {
        console.log("При вычислении произошла ошибка");
    }
}
console.log(calculateVolumeAndArea(5));