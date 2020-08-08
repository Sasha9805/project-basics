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

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Первое задание
// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	console.log(numberOfFilms);
// 	// Мы исп. +, поэтому это условие некорректное, хотя и работает
// 	// while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 	while (numberOfFilms == 0 || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		console.log(numberOfFilms);
// 	}
// }

// start();

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
	// count: numberOfFilms,
	// Можно так
	count: 0,
  movies: {},
  actors: {},
  genres: [],
	privat: false,
	start() {
		// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
		this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		// Мы исп. +, поэтому это условие некорректное, хотя и работает
		// while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		// while (numberOfFilms == 0 || isNaN(numberOfFilms)) {
		// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
		// }
		while (this.count == 0 || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
		// this.count = numberOfFilms;
	},
	detectPersonalLevel() {
		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count <= 30) {
			console.log('Вы классический зритель');
		} else if (this.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const film = prompt('Один из последних просмотренных фильмов?', ''),
						mark = prompt('На сколько оцените его?', '');

			if (film !== '' && mark !== '' && film !== null && mark !== null && film.length <= 50) {
				this.movies[film] = mark;
			} else {
				i--;
			}
		}
	},
	showMyDB() {
		if (!this.privat) {
			console.log(this);
		}
	},
	writeYourGenres() {
		// Можно исп. split, при этом пользователь сразу должен ввести все три жанра через разделитель
		for (let i = 1; i <= 3; i++) {
			const userAnswer = prompt(`Ваш любимый жанр под номером ${i}`, '');
			if (userAnswer) {
				this.genres[i - 1] = userAnswer;
			} else {
				i--;
			}
		}
		// Можно исп. item
		this.genres.forEach(function(item, i, arr) {
			console.log(`Любимый жанр ${i + 1} - это ${arr[i]}`);
		}); 
	},
	toggleVisibleMyDB() {
		this.privat = !this.privat;
	},
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
console.log(personalMovieDB);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов');
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
// 		console.log('Вы классический зритель');
// 	} else if (personalMovieDB.count > 30) {
// 		console.log('Вы киноман');
// 	} else {
// 		console.log('Произошла ошибка');
// 	}
// }

// detectPersonalLevel();

// Третье задание
// const filmFirst = prompt('Один из последних просмотренных фильмов?', ''),
//       markFirst = prompt('На сколько оцените его?', ''),
//       filmSecond = prompt('Один из последних просмотренных фильмов?', ''),
//       markSecond = prompt('На сколько оцените его?', '');

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		// let film = prompt('Один из последних просмотренных фильмов?', ''),
// 		// 	mark = prompt('На сколько оцените его?', '');
// 		// console.log(film === '' || mark === '' || film === null || mark === null || film.length > 50);
// 		// console.log(film === null);
// 		// while (film === '' || mark === '' || film === null || mark === null || film.length > 50) {
// 		// 	film = prompt('Один из последних просмотренных фильмов?', '');
// 		// 	mark = prompt('На сколько оцените его?', '');
// 		// }
// 		// personalMovieDB.movies[film] = mark;

// 		// С сохранением const
// 		const film = prompt('Один из последних просмотренных фильмов?', ''),
// 			mark = prompt('На сколько оцените его?', '');

// 		if (film !== '' && mark !== '' && film !== null && mark !== null && film.length <= 50) {
// 			personalMovieDB.movies[film] = mark;
// 		} else {
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();

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

// function showMyDB(obj, property) {
// 	if (!obj[property]) {
// 		console.log(obj);
// 	}
// }

// function writeYourGenres(obj) {
// 	alert('Ответьте на 3 вопроса');
// 	for (let i = 1; i <= 3; i++) {
// 		const userAnswer = prompt(`Ваш любимый жанр под номером ${i}`, '');
// 		if (userAnswer) {
// 			obj.genres[i - 1] = userAnswer;
// 		} else {
// 			i--;
// 		}
// 	}
// }

// showMyDB(personalMovieDB, "privat");

// writeYourGenres(personalMovieDB);
// undefined
// console.log(personalMovieDB.filmFirst);