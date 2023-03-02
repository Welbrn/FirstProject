'use strict';

// alert('Hello'); 

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('DA?', '20');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('DA?', '');
// answers[1] = prompt('NET?', '');
// answers[2] = prompt('KTO?', '');

// console.log(typeof(answers));




// const category = 'toys';


// // Старый формат
// // console.log('https://soumeurl.com/' + category + '/' + '4');


// // Новый формат
// console.log(`https://soumeurl.com/${category}/4`);


// const user = 'Andrey';

// alert(`Hello, ${user}`);
// console.log('arr' + '- object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// // console.log(++incr);
// // console.log(--decr);

// // console.log(5%2); 

// // console.log(2*4 === '8');
// // // % - остаток от деления 
// // // = - присваивание 
// // // == - сравнение 
// // // === сравнение по типу данных
// // // && - И
// // // ||- или 
// // // !- отрицание (меняет значение на обратное)

// // const biba = true,
// //     boba = false; 

// // console.log(biba || boba);

// alert('Hello');
////////////////////////////////////////////////////////////////////////////////////////////
const  numberOfFilm = +prompt ('Сколько фильмов посмотрели', '');

const personaLMovieDB = {
    count: numberOfFilm,
    movies: {
    
    },
    actors: {

    },
    genres: [],
    private: false
};

    const a = prompt('один из последних просмотренных фильмов', ''),
          b = prompt('на сколько оцените его?', ''),
          c = prompt('один из последних просмотренных фильмов', ''),
          d = prompt('на сколько оцените его?', '');


personaLMovieDB.movies[a] = b;
personaLMovieDB.movies[c] = d;

console.log(personaLMovieDB);