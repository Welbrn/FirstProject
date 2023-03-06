'use strict';

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

if (personaLMovieDB.count < 10) {
	console.log('просмотренно довольно мало фильмов');
} else if (personaLMovieDB.count >= 10 && personaLMovieDB.count < 30 ) {
	console.log('вы класический зритель');
} else if (personaLMovieDB.count > 30){
	console.log('вы киноман');
} else {
	console.log('ошибка');
}

console.log(personaLMovieDB);