// TODO Створи змінну `isLoggedIn` зі значенням `true`. Якщо користувач увійшов у систему, виведи `Кабінет відкрито`.

// const isLogedIn = true;

// if (isLogedIn) {
//   console.log('Кабінет відкрито');
// }

// TODO Створи функцію `getScoreLevel(score)`: від 80 включно — `Високий`, від 50 включно — `Середній`, інакше — `Початковий`. Перевір `68`.

// function getScoreLevel(score) {
//   if (score >= 80) {
//     return `Високий`;
//   } else if (score >= 50) {
//     return `Середній`;
//   } else {
//     return `Початковий`;
//   }
// }

// console.log(getScoreLevel(92));
// console.log(getScoreLevel(80));
// console.log(getScoreLevel(68));
// console.log(getScoreLevel(50));
// console.log(getScoreLevel(39));

// TODO Створи `validateRegistration(name, email, password, acceptedRules)`. Пріоритет перевірок: порожнє ім’я — `Вкажіть ім’я`; email без `@` — `Некоректний email`; пароль коротший за 8 — `Короткий пароль`; правила не прийняті — `Прийміть правила`; інакше — `Реєстрація дозволена`. Перевір `'Анна', 'anna@mail.com', 'jsStart8', true`.

// function validateRegistration(name, email, password, acceptedRules) {
//   if (name.trim() === '') {
//     return `Вкажіть ім’я`;
//   } else if (!email.includes('@')) {
//     return `Некоректний email`;
//   } else if (password.length < 8) {
//     return `Короткий пароль`;
//   } else if (!acceptedRules) {
//     return `Прийміть правила`;
//   } else {
//     return `Реєстрація дозволена`;
//   }
// }

// console.log(validateRegistration('Анна', 'anna@mail.com', 'jsStart8', true));
// console.log(validateRegistration('', 'anna@mail.com', 'jsStart8', true));
// console.log(validateRegistration('Анна', 'annamail.com', 'jsStart8', true));
// console.log(validateRegistration('Анна', 'anna@mail.com', 'jsStart', true));
// console.log(validateRegistration('Анна', 'anna@mail.com', 'jsStart8', false));

// TODO Є `hasUnreadMessage = false`. Якщо непрочитаних повідомлень немає, виведи `Нових повідомлень немає`.

// const hasUnreadMessage = false;
// if (!hasUnreadMessage) {
//   console.log(`Нових повідомлень немає`);
// }

// TODO Створи `getLessonState(isPublished, isLocked)`. Якщо урок не опублікований — `Чернетка`; якщо опублікований, але заблокований — `Заблоковано`; інакше — `Доступно`. Перевір `true, false`.

// function getLessonState(isPublished, isLocked) {
//   if (!isPublished) {
//     return `Чернетка`;
//     //   } else if (isPublished && isLocked) {           // итак уже isPublished
//   } else if (isLocked) {
//     return `Заблоковано`;
//   } else {
//     return `Доступно`;
//   }
// }

// console.log(getLessonState(true, true));   //Заблоковано
// console.log(getLessonState(true, false));  //Доступно
// console.log(getLessonState(false, true));  //Чернетка
// console.log(getLessonState(false, false)); //Чернетка

// TODO Створи `validateLogin(login)`. Після `trim()` поверни `Логін порожній`, якщо рядок порожній; `Логін закороткий`, якщо довжина менша за 4; інакше — `Логін прийнято`. Перевір `'  js  '`.

// function validateLogin(login) {
//   if (login.trim() === '') {
//     return `Логін порожній`;
//   } else if (login.trim().length < 4) {
//     return `Логін закороткий`;
//   } else {
//     return `Логін прийнято`;
//   }
// }

// console.log(validateLogin('  js  '));

// TODO Створи `getFileType(fileName)`. Без урахування регістру поверни `JavaScript`, якщо назва закінчується на `.js`; `HTML`, якщо на `.html`; `CSS`, якщо на `.css`; інакше — `Невідомий тип`. Перевір `'STYLE.CSS'`.

// function getFileType(fileName) {
//   const lowerFileName = fileName.toLowerCase();
//   if (lowerFileName.endsWith('.js')) {
//     return `JavaScript`;
//   } else if (lowerFileName.endsWith('.html')) {
//     return `HTML`;
//   } else if (lowerFileName.endsWith('.css')) {
//     return `CSS`;
//   } else {
//     return `Невідомий тип`;
//   }
// }

// console.log(getFileType('STYLE.CSS'));

// TODO Створи `getModuleAccess(role, isPaid, completedIntro, isBlocked)`. Заблокованому завжди повертається `Доступ заблоковано`. Ментор або адміністратор має `Повний доступ`. Студент отримує `Доступ відкрито`, тільки якщо курс оплачено й вступ завершено. Інакше — `Виконайте умови доступу`. Перевір `'student', true, true, false`.

// function getModuleAccess(role, isPaid, completedIntro, isBlocked) {
//   if (isBlocked) {
//     return `Доступ заблоковано`;
//   } else if (role === 'mentor' || role === 'admin') {
//     return `Повний доступ`;
//   } else if (isPaid && completedIntro) {
//     return `Доступ відкрито`;
//   } else {
//     return `Виконайте умови доступу`;
//   }
// }

// console.log(getModuleAccess('student', true, true, true)); // Доступ заблоковано
// console.log(getModuleAccess('admin', false, false, false)); // Повний доступ
// console.log(getModuleAccess('mentor', false, false, false)); // Повний доступ
// console.log(getModuleAccess('student', true, false, false)); // Виконайте умови доступу
// console.log(getModuleAccess('student', false, true, false)); // Виконайте умови доступу
// console.log(getModuleAccess('student', true, true, false)); // Доступ відкрито

// TODO Створи `checkUsername(username)`. Коректне ім’я має довжину від 5 до 12 символів включно та не повинно містити пробіл. Поверни `Коректне` або `Некоректне`. Перевір `'js_student'`.

// function checkUsername(username) {
//   const length = username.trim().length;
//   if (length >= 5 && length <= 12) {
//     return `Коректне`;
//   } else {
//     return `Некоректне`;
//   }
// }

// console.log(checkUsername('js_student'));

// TODO Створи `getDeadlineStatus(daysLeft, isSubmitted)`. Якщо роботу здано — `Здано`; інакше, якщо днів не більше 0 — `Термін минув`; якщо залишився 1 день — `Останній день`; інакше — `Є час`. Перевір `1, false`.

// function getDeadlineStatus(daysLeft, isSubmitted) {
//   //   if (isSubmitted) {
//   //     return `Здано`;
//   //   } else if (daysLeft <= 0) {
//   //     return `Термін минув`;
//   //   } else if (daysLeft === 1) {
//   //     return `Останній день`;
//   //   } else {
//   //     return `Є час`;
//   //     }

//   // Або //

//   if (isSubmitted) {
//     return `Здано`;
//   }

//   if (daysLeft <= 0) {
//     return `Термін минув`;
//   }

//   if (daysLeft === 1) {
//     return `Останній день`;
//   }

//   return `Є час`;
// }

// console.log(getDeadlineStatus(0, false)); // Термін минув
// console.log(getDeadlineStatus(1, false)); // Останній день
// console.log(getDeadlineStatus(2, false)); // Є час
// console.log(getDeadlineStatus(1, true)); // Здано

// TODO Створи `checkRoute(path, isAuthenticated, role)`. Для шляхів, що починаються з `'/admin'`, потрібна роль `'admin'`; для `'/profile'` потрібна авторизація; шлях `'/'` завжди доступний; решта повертає `Сторінку не знайдено`. Перевір `'/admin/users', true, 'editor'`.

// function checkRoute(path, isAuthenticated, role) {
//   if (path.startsWith('/admin')) {
//     return role === 'admin' ? `Доступ дозволено` : `Доступ заборонено!`;
//   }
//   if (path.startsWith('/profile')) {
//     return isAuthenticated ? `Доступ дозволено` : `Доступ заборонено!`;
//   }
//   if (path.startsWith('/')) {
//     return `Доступ дозволено`;
//   }

//   return `Сторінку не знайдено`;
// }

// console.log(checkRoute('/admin/users', true, 'editor'));
// console.log(checkRoute('/admin/users', true, 'admin'));
// console.log(checkRoute('/profile/users', true, 'editor'));
// console.log(checkRoute('/profile/users', false, 'editor'));
// console.log(checkRoute('profile/user', false, 'editor'));

// ----------------------------------------- PART 2 ------------------------------------------------------------ //

// TODO За допомогою циклу `for` виведи числа від 1 до 5. Кожне число має з’явитися в консолі на окремому рядку.

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// TODO Створи функцію `countVowels(text)`. Переведи текст у нижній регістр і циклом порахуй англійські голосні `a`, `e`, `i`, `o`, `u`. Перевір `'Education'`.

// function countVowels(text) {
//   const lowerText = text.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < lowerText.length; i++) {
//     if ('aeiou'.includes(lowerText[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('Education'));

// TODO За допомогою циклу `for` виведи числа від 5 до 1, а після завершення циклу — слово `Старт!`.

// function start(seconds) {
//   for (let i = seconds; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('Старт!');
// }

// start(5);

// TODO Є рядок `'JS'`. Пройди по ньому циклом і для кожного символу виведи рядок формату `<індекс>: <символ>`.

// function analize(text) {
//   for (let i = 0; i < text.length; i++) {
//     console.log(`${i}: ${text[i]}`);
//   }
// }

// analize('JS');

// TODO Створи `removeSpaces(text)`. Циклом побудуй новий рядок, додаючи лише символи, які не є пробілами. Перевір `'learn js daily'`.

// function removeSpaces(text) {
//   let newWord = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== ' ') {
//       newWord += text[i];
//     }
//   }
//   return newWord;
// }

// console.log(removeSpaces('learn js daily'));

// TODO Створи `findLongestWord(text)`. Не використовуй масиви або `split()`. Проходь по рядку разом із додатковим пробілом у кінці, накопичуй поточне слово й запам’ятовуй найдовше. Перевір `'learning loops builds skill'`.

// function findLongestWord(text) {
//   let letterCount = 0;
//   let biggesLetterCount = 0;
//   let currentWord = '';
//   let biggestWord = '';
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== ' ') {
//       if (i === text.length - 1) {
//         if (biggesLetterCount < letterCount) {
//           biggesLetterCount = letterCount;
//           biggestWord = currentWord;
//           currentWord = '';
//           letterCount = 0;
//         }
//       }
//       letterCount++;
//       currentWord += text[i];
//     } else if (biggesLetterCount < letterCount) {
//       biggesLetterCount = letterCount;
//       biggestWord = currentWord;
//       currentWord = '';
//       letterCount = 0;
//     } else {
//       currentWord = '';
//       letterCount = 0;
//     }
//     // console.log(text[i]);
//     // console.log(currentWord);
//     // console.log(letterCount);
//   }

//   return biggestWord;
// }

// АБО ----------------------------------------

// function findLongestWord(text) {
//   const wordsArr = text.split(' ');
//   let longestWord = wordsArr[0];

//   for (const word of wordsArr) {                      // !!
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// АБО №2 --------------------------------------

// function findLongestWord(text) {
//   return text
//     .split(' ')
//     .reduce((longestWord, word) =>
//       longestWord.length < word.length ? word : longestWord
//     ); // !!
// }

// console.log(findLongestWord('learning loops builds skill'));

// TODO Створи `makeWordLengthReport(text)`. Без `split()` сформуй рядок виду `Code(4) every(5) day(3)`. Між елементами має бути один пробіл. Перевір `'Code every day'`.

// function makeWordLengthReport(text) {
//   let newText = '';
//   let currentWord = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== ' ') {
//       currentWord += text[i];
//     } else {
//       newText += `${currentWord}(${currentWord.length}) `;
//       currentWord = '';
//     }
//   }
//   newText += `${currentWord}(${currentWord.length})`;

//   return newText;
// }

// console.log(makeWordLengthReport('Code every day'));

// TODO Створи `removeDuplicateWords(text)` без `split()`. Читай слова посимвольно. Додавай слово до результату, лише якщо рядок із пробілами навколо результату ще не містить таке окреме слово. Перевір `'code code clean code'`.

// function removeDuplicateWords(text) {
//   let result = '';
//   let curentWord = '';
//   for (let i = 0; i < text.length; i += 1) {
//     if (text[i] !== ' ') {
//       curentWord += text[i];
//     } else {
//       if (!result.includes(curentWord)) {
//         result += `${curentWord} `;
//       }
//       curentWord = '';
//     }
//   }

//   if (!result.includes(curentWord)) {
//     result += `${curentWord} `;
//   }

//   return result.trim();
// }

// console.log(removeDuplicateWords('code code clean clean'));
