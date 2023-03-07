'use strict';

let numberOfFilm; 

function start() {
	numberOfFilm = +prompt ('Сколько фильмов посмотрели', '');
	while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
		numberOfFilm = +prompt ('Сколько фильмов посмотрели', '');
	}
}
start();

const personaLMovieDB = {
	count: numberOfFilm,
	movies: {
    
	},
	actors: {

	},
	genres: [],
	private: false
};

function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt('один из последних просмотренных фильмов', ''),
			b = prompt('на сколько оцените его?', '');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
			personaLMovieDB.movies[a] = b;
		} else {
			console.log ('error');
			i--;
		}
	}
}
rememberMyFilms ();

function detectPersonalLvl() {
	if (personaLMovieDB.count < 10) {
		console.log('просмотренно довольно мало фильмов');
	} else if (personaLMovieDB.count >= 10 && personaLMovieDB.count < 30 ) {
		console.log('вы класический зритель');
	} else if (personaLMovieDB.count > 30){
		console.log('вы киноман');
	} else {
		console.log('ошибка');
	}
}
detectPersonalLvl();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personaLMovieDB);
	}
	
}

showMyDB(personaLMovieDB.private);

function writeYourGeners() {
	for (let i = 1; i <= 3; i++) {
		personaLMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}	
	
}	
writeYourGeners();