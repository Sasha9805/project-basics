/* Задание на урок:

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

'use strict';

// Первое задание
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// Второе задание
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// Третье задание
const filmFirst = prompt('Один из последних просмотренных фильмов?', ''),
      markFirst = prompt('На сколько оцените его?', ''),
      filmSecond = prompt('Один из последних просмотренных фильмов?', ''),
      markSecond = prompt('На сколько оцените его?', '');
// Через точку и через кавычки ключом будет filmFirst!!
// personalMovieDB.movies.filmFirst = markFirst;
// personalMovieDB.movies['filmFirst'] = markFirst;
personalMovieDB.movies[filmFirst] = markFirst;
personalMovieDB.movies[filmSecond] = markSecond;

console.log(personalMovieDB);
// undefined
console.log(personalMovieDB.filmFirst);