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
// let i = 0;

// while (i < 2) {
// 	const a = prompt('один из последних просмотренных фильмов', ''),
// 	b = prompt('на сколько оцените его?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
// 		personaLMovieDB.movies[a] = b;
		
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let i = 0;

// do {
	
// const a = prompt('один из последних просмотренных фильмов', ''),
// 		b = prompt('на сколько оцените его?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
		
// 		personaLMovieDB.movies[a] = b;
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++
// } while (i < 2);
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////                     ЦИКЛЫ                               ///////////////////////////////////////////////////


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

////////////////////////////////////////////////// HOME WORK///////////////////////////////////////////////////////////////////////////////


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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////ФУНКЦИИ////////////////////////////////////////////////////////////////////////////

let num = 20;

function showfirstmassage(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

showfirstmassage('helo world');
console.log(num);
/////////////////////////////////////////////////////

function calc (a, b) {
	return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 9));
console.log(calc(1, 2));
////////////////////////////////////////

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);
///////////////////////////////////////

const loger = function() {
	console.log('hello');
};

loger();
/////////////////////////////////////

const calc = (a, b) => { return a + b};
///////////////////////////////////////
const calc = (a, b) => { 
	console.log('1');
	return a + b;
};
/////////////////////////////////////////

const usdCurr = 24;
const eurCurr = 32;

function convert(amount, curr) {
	console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);
/////////////////////////////////////////

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console .log(result * discount); 
    
}

const res = convert(500, usdCurr);
promotion(res);
//////////////////////////////////////////

function test() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}
test();
////////////////////////////////////////////

function doNithing() {}
    console.log(doNithing() === undefined);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////HOME WORK///////////////////////////////////////////////////////////////////////////////
function sayHello(name) {
    return `Hello, ${name}!`;
}
sayHello ('Andrey');
////////////////////////////////////////
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);
////////////////////////////////////////
function getMathResult(num, povtor) {
	if (typeof(povtor) !== 'number' || povtor <= 0) {
		return num;
	}

	let str = '';

	for (let i = 1; i <= povtor; i++) {
		if (i === povtor) {
			str += `${num * i}`;
		} else {
			str += `${num * i}---`;
		}
	}

	return str;
}

getMathResult(10, 5);
//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////МЕТОДЫ/////////////////////////////////////////////////////////////////////////////////////
// const str = 'teSt';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//////////////////////////////////////
// let fruit = 'some fruit';

// console.log(fruit.indexOf('q'));
/////////////////////////////////////////////

// const logg = 'Hello World';

// console.log(logg.slice(-6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));
///////////////////////////////////////////////

// const num = 12.5;
// console.log(Math.round(num));
/////////////////////////////////////////////

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////HOME WORK/////////////////////////////////////////////////////////
function calculateVolumeAndArea(dlinaRebraCuba) {
	if (typeof(dlinaRebraCuba) !== 'number' || dlinaRebraCuba < 0 || !Number.isInteger(dlinaRebraCuba)) {
		return 'При вычислении произошла ошибка';
	}

	let obemCuba = 0,
		ploschadCuba = 0;
	obemCuba = dlinaRebraCuba * dlinaRebraCuba * dlinaRebraCuba;
	ploschadCuba = 6 * (dlinaRebraCuba *dlinaRebraCuba);

	return `Объем куба: ${obemCuba}, площадь всей поверхности: ${ploschadCuba}`;
}
calculateVolumeAndArea(5);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCoupeNumber(seatNumber) {
	if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)){
		return 'Ошибка. Проверьте правильность введенного номера места';
	}

	if (seatNumber === 0 || seatNumber > 36) {
		return 'Таких мест в вагоне не существует';
	}

	return Math.round(seatNumber);

}
getCoupeNumber(6);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getTimeFromMinutes(minutesTotal) {
	if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
		return 'Ошибка, проверьте данные';
	}

	const hours = Math.floor(minutesTotal / 60);
	const minutes = minutesTotal % 60;

	let hoursStr = '';

	switch (hours) {
	case 0: 
		hoursStr = 'часов';
		break;
	case 1:
		hoursStr = 'час';
		break;
	case 2:
	case 3:
	case 4:
		hoursStr = 'часа';
		break;
	default:
		hoursStr = 'часов';
	}

	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);
////////////////////////////////////////////////////////////////////////////////////////////
function findMaxNumber(a, b, c, d) {
	if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
		return 0;
	} else {
		return Math.max(a, b, c, d);
	}

}
findMaxNumber(12, -100, 5, 15);
///////////////////////////////////////////////////////////////////////////////////////////////////

function fib(num) {
	if(typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
		return '';
	}
	let result = '';
	let first = 0;
	let second = 1;

	for(let i = 0; i < num;  i++) {
		if (i + 1 === num) {
			result += `${first}`;
		} else {
			result += `${first} `;
		}

		let third = first + second;
		first = second;
		second = third;
	}
	return result;
}

fib(5);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////ФУНКЦИИ CALLBACK////////////////////////////////////////////////////////////////////////////////////////////////////////

function first() {
	setTimeout(function() {
		console.log(1);
	}, 500);                                                            //500 - задержка в мСекунд.
}

function second() {
	console.log(2);
}
first();
second();
////////////////////////////////////////////////////////////////////////////////////

function learnJS(lang, callback) {
	console.log(`я учу: ${lang}`);
	callback();
}

function done() {
	console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ  ОБЪЕКТОВ/////////////////////////////////////////////////////////////////////////

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log('Test');
	}
};

options.makeTest();

// eslint-disable-next-line no-unused-vars
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);

console.log(options.colors.bg);

delete options.colors.bg;

console.log(options);

let counter = 0;
for(let key in options) {
	if(typeof(options[key]) === 'object')  {
		for(let i in options[key]) {
			console.log(`свойство ${i} имеет значение ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`свойство ${key} имеет значение ${options[key]}`);
		counter++;
	}
}

console.log(counter);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////МАССИВ И ПСЕВДОМАССИВЫ//////////////////////////////////////////////////////////////////////

//const arr = [1, 2, 3, 6, 8];

arr.forEach(function(num, nomerPoPoradku, arr) {                                               //ARR - ССЫЛКА НА МАССИВ
	console.log(`${nomerPoPoradku}: ${num} внутри массива ${arr}`);
});

arr.pop();                                                   //УДАЛЯЕТ ПОСЛЕДНИЙ ЭЛЕМЕНТ ИЗ МАССИВА
arr.push(10);                                                    //ДОБАВЛЯЕТ ЭЛЛЕМЕНТ В КОНЕЦ МАССИВА
arr.shift();                                                               //... В НАЧАЛЕ МАССИВА
arr.unshift(10);                                                             //... В НАЧАЛЕ МАССИВА

console.log(arr);

for(let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
// ||
for(let value of arr) {
	console.log(value);                                              //МОЖНО ИСПОЛЬЗОВАТЬ 'BREAK' && 'CONTINUE'
}
////////////////////////////////////////////////////////////////////////////////////
const str = prompt('', '');
products.sort();                                                       // СОРТИРОВАКА ЭЛЛЕМЕНТОВ В МАССИВЕ КАК СТРОКИ ПО АЛФАВИТУ	
//////////////////////////////////////////
const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);                                                              // ДЛЯ СОРТИРОВКИ ЧИСЕЛ ПО ПОРЯДКУ
console.log(arr);
                                                                       
function compareNum(a, b) {
	return a - b; 
}
////////////////////////////////////////////////////
const products = str.split(', ');                                      //-РАЗДЕЛЕНИЕ
console.log(products.join('; '));                                  // - СОЕДИНЕНИЕ В ОДНУ СТРОКУ 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ//////////////////////////////////////////////////////////////////////////////

let a = 5,
	b = a;

b = b + 5;

console.log(b);
console.log(a);
//////////////////////////////////////////////////////
const obj = {
	a: 5,
	b: 1
};

const copy = obj;   // ССЫЛКА НА ОБЪЕКТ

copy.a = 10;

console.log(copy);
console.log(obj);
///////////////////////////////////////////////////

function copyrigh(mainObj) {
	let objCopy = {};

	let key;
	for(key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
	d:17,
	e:20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);
/////////////////////////////////////////////////////////
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'iuylg';
console.log(newArray);
console.log(oldArray);
/////////////////////////////////////////////////////////

const video = ['youtube', 'vimeo', 'netflix'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'telegram', 'reddit'];

console.log(internet);
///////////////////////////////////////////////////////////////////
function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const numbar = [2, 5, 7];

log(...num);
///////////////////////////////////////////////////////////////////

const array = ['a',  'b'];

// eslint-disable-next-line no-unused-vars
const newArrrray = [...array];
////////////////////////////////////////////////////////////////////
const  q  = {
	one: 1,
	two: 2
};

const newObj = {...q};
console.log(newObj);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////HOME WORK/////////////////////////////////////////////////////////

const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function(plan) {
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `Мне ${age} и я владею языками: `;

		languages.forEach(function(lang) {
			str += `${lang.toUpperCase()} `;
		});

		return str;
	}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
	const {exp} = plan.skills;                                        //ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА  извлекаем свойство exp из объекта plan.skills и сохраняем его в переменной exp
	return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
	let str = '';
	const {programmingLangs} = plan.skills;
	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}

	return str;
}

showProgrammingLangs(personalPlanPeter);
/////////////////////////////////////////////////////////////////////////////

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';                               //ANALOG IF - `?`, ELSE - `:`;

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);
///////////////////////////////////////////////////////////////////////////////////

const someString = 'This is some strange string';

function reverse(str) {
      if (typeof(str) !== 'string') {
        return "Ошибка!";
    } else {
    return str.split('').reverse().join('');
    }
}


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
	return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////