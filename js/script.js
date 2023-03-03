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
//////////////////////////////////////////////////////////////////////////////////////////////

// if  (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }
/////////////////////////////////////////////////////////////////////////////////////////////////
// const num = 50

// if (num < 49 ) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('mnogo');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');
//////////////////////////////////////////////////////////////////////////////////////////

// const num = 50

// switch (num) {
//     case 49: 
//         console.log('False');
//         break;
//     case 100:
//         console.log('False');                           Switch - ВСЕГДА СТРОГОЕ СРАВНЕНИЕ 
//         break;
//     case 50:                                                 
//         console.log('True');
//         break;
//     default: 
//         console.log('Ne dumayu');
//         break;
// }
//////////////////////////////////////////////////////////////////////////////////////////

// const humb = 5;
// const fries  = 0;
  
// if (humb && fries) {
//     console.log('E vkusno saipal!');
// } 

// console.log((humb && fries));
/////////////////////////////////////////////////////////////////////////////////////////////

// const humb = 3;
// const fries  = 1;
// const cola = 0;

// console.log(humb === 3 && cola && fries);
// console.log(1 && 0);
// console.log(1 &&5);
// console.log(null && 5);
// console.log(0 && 'biba?');

// if (humb === 3 && cola === 1 && fries === 1) {
//     console.log('E vkusno saipal!');
// } else {
//     console.log('Ne vkuso saipal(');
// }
////////////////////////////////////////////////////////////////////////////////////////////////


// const humb = 1;
// const fries  = 3;
// const cola = 0;
// const nugets = 2;


// if (humb === 3  && cola === 2 || fries === 3 && nugets) {
//     console.log('E vkusno saipal!');
// } else {
//     console.log('Ne vkuso saipal(');
// }

// console.log(humb === 3  && cola === 2 || fries === 3 && nugets)

//////////////////////////////////////////////////////////////////////////////////////////////

// let johnReport, alexReport, samReport, mariaReport = 'sdali';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);

//////////////////////////////////////////////////////////////////////////////////////////////////


//                     ЦИКЛЫ                               //


// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num ++;
// }



// do  {
//     console.log(num);
//     num ++;
// }
// while (num < 55);


// for (let  i =  1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


// for (let  i =  1; i < 10; i++) {
//     if (i === 6) {
//         // break;
// continue;
//     }

//     console.log(i);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j); 
//     }
// }


// let result = '';
// const  lenght = 11;

// for (let i = 1; i < lenght;  i++) {

//     for (let j = 0; j< i; j++) {
//         result += '*';

//     }

//      result += '\n'                                          //ПЕРЕНОС НА ДРУГУЮ СТРОКУ
// }


// console.log(result);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// first: for (let i = 0; i < 3; i++) {
//     console.log(`first lvl:  ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`second lvl: ${j}`);
//     }
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`thitd lvl: ${k}`); 
//         }

// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
    
//     for (let i = 0; i < arr.length; i++) {
//    result[i] = arr[i];
// }




// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }

// console.log(data);
// return data;







//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0, j = data.length - 1; i < data.length; i++, j--) {
//   result[i] = data[j];
// }

// console.log(result);
    
//     return result;





// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// let result = '';
// const dlina = 7;

// for (let i = 1; i < dlina; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }


// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////// HOME WORK////////////////////////////////////////////////////////////


// for (let i  = 5; i <= 10; i++) {
// 	console.log(i);
// }
///////////////////////////////////////////

// for (let i = 20; i >= 10; i--) {
// 	if (i === 13) {
// 		break;
// 	}
// 	console.log(i);
// }
/////////////////////////////////////////////

// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 === 0){
// 		console.log(i);
// 	}
// }
////////////////////////////////////////////

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }



// let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
///////////////////////////////////////////////

// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
/////////////////////////////////////////////////

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i =  0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);
////////////////////////////////////////////////

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//     data[i] = data[i] * 2;
//     } else {
//         if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//         }
//     } 
// } 
// console.log(data);
/////////////////////////////////////////////////

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     for(let i = 0, j = data.length - 1; i < data.length; i++, j--) {
//         result[i] = data[j];
//     }
//     console.log(result);
/////////////////////////////////////////////////////////

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////