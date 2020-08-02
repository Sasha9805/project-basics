/* Задание на урок 1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
	- count - сюда передается ответ на первый вопрос
	- movies - в это свойство поместить пустой объект
	- actors - тоже поместить пустой объект
	- genres - сюда поместить пустой массив
	- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
	- 'Один из последних просмотренных фильмов?'
	- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
	movies: {
		'logan': '8.1'
	}

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Первое задание
let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	console.log(numberOfFilms);
	// Мы исп. +, поэтому это условие некорректное, хотя и работает
	// while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
	while (numberOfFilms == 0 || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
		console.log(numberOfFilms);
	}
}

start();

// 0
// console.log(+null);
// 0
// console.log(+'');
// NaN
// console.log(+'str');
// NaN
// console.log(+NaN);
// 5
// console.log(+'               5     ');
// NaN
// console.log(+'               5a     ');
// NaN
// console.log(+'               5     2  ');

// Второе задание
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

// Третье задание
// const filmFirst = prompt('Один из последних просмотренных фильмов?', ''),
//       markFirst = prompt('На сколько оцените его?', ''),
//       filmSecond = prompt('Один из последних просмотренных фильмов?', ''),
//       markSecond = prompt('На сколько оцените его?', '');

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		// let film = prompt('Один из последних просмотренных фильмов?', ''),
		// 	mark = prompt('На сколько оцените его?', '');
		// console.log(film === '' || mark === '' || film === null || mark === null || film.length > 50);
		// console.log(film === null);
		// while (film === '' || mark === '' || film === null || mark === null || film.length > 50) {
		// 	film = prompt('Один из последних просмотренных фильмов?', '');
		// 	mark = prompt('На сколько оцените его?', '');
		// }
		// personalMovieDB.movies[film] = mark;

		// С сохранением const
		const film = prompt('Один из последних просмотренных фильмов?', ''),
			mark = prompt('На сколько оцените его?', '');

		if (film !== '' && mark !== '' && film !== null && mark !== null && film.length <= 50) {
			personalMovieDB.movies[film] = mark;
		} else {
			i--;
		}
	}
}

rememberMyFilms();

// Через цикл while
// let i = 0;
// while (i < 2) {
// 	const film = prompt('Один из последних просмотренных фильмов?', ''),
// 		mark = prompt('На сколько оцените его?', '');

// 	if (film !== '' && mark !== '' && film !== null && mark !== null && film.length <= 50) {
// 		personalMovieDB.movies[film] = mark;
// 	} else {
// 		i--;
// 	}
// 	i++;
// }

// Через do-while
// let i = 0;
// do {
// 	const film = prompt('Один из последних просмотренных фильмов?', ''),
// 		mark = prompt('На сколько оцените его?', '');
// 	if (film !== '' && mark !== '' && film !== null && mark !== null && film.length <= 50) {
// 		personalMovieDB.movies[film] = mark;
// 	} else {
// 		i--;
// 	}
// 	i++;
// } while (i < 2);

// Через точку и через кавычки ключом будет filmFirst!!
// personalMovieDB.movies.filmFirst = markFirst;
// personalMovieDB.movies['filmFirst'] = markFirst;

function showMyDB(obj, property) {
	if (!obj[property]) {
		console.log(obj);
	}
}

function writeYourGenres(obj) {
	alert('Ответьте на 3 вопроса');
	for (let i = 1; i <= 3; i++) {
		const userAnswer = prompt(`Ваш любимый жанр под номером ${i}`, '');
		if (userAnswer) {
			obj.genres[i - 1] = userAnswer;
		} else {
			i--;
		}
	}
}

showMyDB(personalMovieDB, "privat");

writeYourGenres(personalMovieDB);
// undefined
// console.log(personalMovieDB.filmFirst);