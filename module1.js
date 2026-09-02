//*TODO: Створи змінну `studentName` за допомогою `const` і запиши в неї своє ім'я. Виведи значення змінної в консоль.

// const studentName = 'Danylo';
// console.log(studentName);

//*TODO: Є `name = 'Олег'`, `age = 17`, `group = 'FS-12'`. Створи один шаблонний рядок формату: `Студент: Олег | Вік: 17 | Група: FS-12`.

// const studentName = 'Олег';
// const age = 17;
// const group = 'Bootcamp 82';

// const message = `Студент: ${studentName} | Вік: ${age} | Група: ${group}`;

// console.log(message);

//*TODO: Створи змінну `age` зі значенням 16. Виведи її в консоль. Переконайся, що значення збережено як число, а не як рядок.

// const age = 16;
// console.log(age);
// console.log(typeof age);

//*TODO: Є `firstName = 'Анна'` і `lastName = 'Коваль'`. Отримай перші літери обох слів і створи рядок `А.К.`.

// const firstName = 'Анна';
// const lastName = 'Коваль';

// const message1 = `${firstName[0]}.${lastName[0]}.`;
// const message2 = `${firstName[firstName.length - 1]}.${lastName[lastName.length - 1]}.`;

// console.log(message1);
// console.log(message2);

//*TODO: Створи змінну `isStudent` зі значенням `true`. Виведи її в консоль.

// const isStudent = true;
// console.log(isStudent);

//*TODO: Є рядок `'   Student_User   '`. Прибери крайні пробіли та перетвори всі літери на нижній регістр.

// const string = `   Student_User   `;
// const trimmedStringLowerCase = string.trim().toLowerCase();
//// console.log(string.trim().toLowerCase());
// console.log(trimmedStringLowerCase);

//*TODO: Створи змінну `city` через `let` зі значенням `'Київ'`. Потім зміни значення на `'Львів'` і виведи результат.

// let city = 'Київ';
// console.log(city);
// city = 'Львів';
// console.log(city);

//*TODO: Є рядок `'   lviv   '`. Прибери пробіли. Потім зроби першу літеру великою, а решту залиш малими. Вхідне слово гарантовано записане малими літерами.

// const city = `   lviv   `;
// console.log(city);

// const trimmedCity = city.trim();
// console.log(trimmedCity);

// const trimmedCityUpper = trimmedCity[0].toUpperCase() + trimmedCity.slice(1, trimmedCity.length());
// console.log(trimmedCityUpper);

//*TODO: Створи змінну `language` зі значенням `'JavaScript'`. За допомогою `typeof` виведи тип її значення.

// const language = 'JavaScript';
// console.log(language);
// console.log(typeof language);
// console.log(Math.PI);
// console.log(typeof Math.PI);

//*TODO: Є `email = 'student@gmail.com'`. Отримай частину після символу `@`. Позицію `@` знайди методом `indexOf()`.

// const email = 'student@gmail.com';
// const atIndex = email.indexOf('@');

// console.log(atIndex);
// // const atIndex2 = email.indexOf('2');
// // console.log(atIndex2);

// const gmail = email.slice(atIndex + 1);
// console.log(gmail);
// // const gmail2 = email.slice(atIndex2 + 1);
// // console.log(gmail2);

// // if (atIndex2 !== -1) {
// //   const gmail2 = email.slice(atIndex2 + 1);
// //   console.log(gmail2);
// // } else {
// //   console.log('Error: -1');
// // }

//*TODO: Створи змінну `lessonNumber` зі значенням `3`. Виведи тип цього значення.

// const lessonNumber = 3;
// console.log(typeof lessonNumber);

//*TODO: Із рядка `'mentor@school.com'` отримай частину до символу `@`.

// const email = 'mentor@school.com';
// const atIndex = email.indexOf('@');
// const nickName = email.slice(0, atIndex);

// console.log(nickName);

//*TODO: Є рядки з зайвими пробілами: `firstName = '  іван  '`, `lastName = '  петренко  '`. Очисти їх, зроби першу літеру кожного слова великою, а решту — малими. Створи `Петренко Іван`.

// const firstName = '  іван  ';
// const lastName = '  петренко  ';

// const trimmedFirstName = firstName.trim();
// const trimmedLastName = lastName.trim();

// const firstNameUpper =
//   trimmedFirstName[0].toUpperCase() + trimmedFirstName.slice(1).toLowerCase();

// console.log(firstNameUpper);

// const lastNameUpper =
//   trimmedLastName[0].toUpperCase() + trimmedLastName.slice(1).toLowerCase();

// console.log(lastNameUpper);

// const message = `${lastNameUpper} ${firstNameUpper}`;
// console.log(message);

//*TODO: Є `fileName = 'lesson-notes.md'`. Отримай останні три символи, щоб дістати розширення `'.md'`.

// const fileName = 'lesson-notes.md';

// const fileFormat = fileName.slice(fileName.indexOf('.'));

// console.log(fileFormat);

//------------------------------------------------------------------------------------------------------------------------------------------------//
//*TODO: Є `email = 'student@example.com'`. Залиш видимими перші дві літери імені користувача та весь домен. Решту імені заміни п'ятьма зірочками. Очікуваний формат: `st*****@example.com`.

// const email = 'student@example.com';

// const namePreview = email.slice(0, 2);
// console.log(namePreview);

// const emailPart = email.slice(0, email.indexOf('@'));
// console.log(emailPart);

// const stars = '*'.repeat(emailPart.length - 2);
// console.log(stars);

// console.log(email.replace(emailPart.slice(2), stars));

//------------------------------------------------------------------------------------------------------------------------------------------------//

//*TODO: Є заголовок `'JavaScript String Basics'`. Перетвори його на нижній регістр і заміни всі пробіли дефісами.

// const title = 'JavaScript String Basics';

// const titleLower = title.toLowerCase();

// const noSpaceTitle = titleLower.replaceAll(' ', '-');

// console.log(noSpaceTitle);

// //----- or -----//

// const noSpaceTitle1 = titleLower.split(' ').join('-');
// console.log(noSpaceTitle1);

//*TODO: Є `'my-first-javascript-homework.js'`. Отримай назву без `'.js'`, заміни всі дефіси пробілами та додай префікс `'Файл: '`.

// const fileName = 'my-first-javascript-homework.js';

// const fileNameNoFormat = fileName.slice(0, fileName.indexOf('.'));
// console.log(fileNameNoFormat);

// const changeSaces = fileNameNoFormat.replaceAll('-', ' ');
// console.log(`Файл: ${changeSaces}`);

//*TODO: Є текст `'JavaScript is a programming language'`. Отримай перші 10 символів і додай в кінці три крапки.

// const text = 'JavaScript is a programming language';

// const mesage = text.slice(0, 16) + '...';
// console.log(mesage);

//*TODO: Є `'archive.backup.zip'`. Знайди останню крапку. Окремо отримай базову назву `'archive.backup'` та розширення `'zip'`.

// const fileName = 'archive.backup.zip';

// const dotIndex = fileName.lastIndexOf('.');

// console.log(dotIndex);

// const firstPart = fileName.slice(0, dotIndex);
// const secondPart = fileName.slice(dotIndex + 1);

// console.log(firstPart);
// console.log(secondPart);

// ---------------------------------------------------- Part 2-------------------------------------------------- //

//*TODO: Створи змінні `firstNumber = 18` і `secondNumber = 11`. За допомогою оператора `>` перевір, чи перше число більше за друге. Виведи результат порівняння в консоль.

// function compareNumbersBigger(firstNumber, secondNumber) {
//   return firstNumber > secondNumber;
// }

// function compareNumbersSmaller(firstNumber, secondNumber) {
//   return firstNumber < secondNumber;
// }

// console.log(compareNumbersBigger(18, 11));
// console.log(compareNumbersSmaller(18, 11));

//*TODO: Створи функцію `haveSameType(firstValue, secondValue)`, яка порівнює результати `typeof` для двох параметрів. Перевір число `8` і число `15`.

// function haveSameType(firstValue, secondValue) {
//   return typeof firstValue === typeof secondValue;
// }

// console.log(haveSameType(1, 2));
// console.log(haveSameType(1, '2'));
// console.log(haveSameType(1, true));

//*TODO: Створи `score = 60` і `minimumScore = 60`. Перевір оператором `>=`, чи набраний бал не менший за мінімальний.

// function compareScores(score, minimumScore) {
//   return score >= minimumScore;
// }

// console.log(compareScores(59, 60)); // false
// console.log(compareScores(60, 60)); // true
// console.log(compareScores(61, 60)); // true

//*TODO: Створи допоміжну функцію `normalizeTitle(title)`, яка прибирає крайні пробіли, переводить текст у нижній регістр і замінює всі дефіси пробілами. Потім створи `areTitlesEqual(firstTitle, secondTitle)`, яка порівнює нормалізовані результати. Перевір `'  JS-Basics  '` і `'js basics'`.

// function normalizeTitle(title) {
//   const noSpaces = title.trim();
//   const toLower = noSpaces.toLowerCase();
//   const slashChangeToSpaces = toLower.replaceAll('-', ' ');

//   return slashChangeToSpaces;
//   //   return title.trim().toLowerCase().replaceAll('-', ' ');
// }

// function areTitlesEqual(firstTitle, secondTitle) {
//   return normalizeTitle(firstTitle) === normalizeTitle(secondTitle);
// }

// console.log(areTitlesEqual('  JS-Basics  ', 'js basics'));

// TODO: Створи функцію `isNumberEqualToText(number, text)`. Усередині перетвори `text` на число за допомогою `Number()` і виконай суворе порівняння. Перевір `42` і `'42'`.

// function isNumberEqualToText(number, text) {
//   return number === Number(text);
// }

// console.log(isNumberEqualToText(42, '42'));

// TODO: Створи функцію `isFirstTextLonger(firstText, secondText)`, яка порівнює довжини двох рядків. Перевір `'keyboard'` і `'mouse'`.
// function isFirstTextLonger(firstText, secondText) {
//   return firstText.length === secondText.length;
// }

// console.log(isFirstTextLonger('keyboard', 'mouse'));

// TODO: Створи функцію `getCleanLength(login)`, яка повертає довжину логіна після `trim()`. Створи другу функцію `isFirstLoginLonger(firstLogin, secondLogin)`, яка порівнює результати першої. Перевір `'  coder_one  '` і `'dev2'`.

// function getCleanLength(login) {
//   return login.trim().length;
// }

// function isFirstLoginLonger(firstLogin, secondLogin) {
//   return getCleanLength(firstLogin) === getCleanLength(secondLogin);
// }

// console.log(isFirstLoginLonger('  coder_one  ', 'dev2'));

// TODO: Створи функцію `createPersonalCode(firstName, lastName, year)`. Вона має взяти перші дві літери імені, перші дві літери прізвища, перевести їх у верхній регістр та додати останні дві цифри року. Для `'Marta'`, `'Stone'`, `2026` очікується `'MAST26'`.

// function createPersonalCode(firstName, lastName, year) {
//   const firstNameCut = firstName.slice(0, 2).toUpperCase();
//   const lastNameCut = lastName.slice(0, 2).toUpperCase();
//   const yearCut = String(year).slice(-2);

//   return `${firstNameCut}${lastNameCut}${yearCut}`;
// }

// console.log(createPersonalCode('Marta', 'Stone', 2026));

// TODO: Створи функцію `containsAtSign(text)`, яка повертає результат наявності '@' у рядку. Перевір `'user@site.net'` і `'usersite.net'`.

// function containAtSign(text) {
//   //   return text.indexOf('@') >= 0;
//   return text.includes('@');
// }

// console.log(containAtSign('user@site.net'));
// console.log(containAtSign('usersite.net'));

// TODO: Створи функцію `makeLengthReport(firstText, secondText)`. Вона повинна повернути рядок `First: 8 | Second: 5 | First longer: true` для значень `'terminal'` і `'mouse'`. Довжини та результат порівняння обчисли всередині функції.

// function makeLengthReport(firstText, secondText) {
//   const firstTextLength = firstText.length;
//   const secondTextLength = secondText.length;

//   const compareLength = firstTextLength > secondTextLength;
//   return `First: ${firstTextLength} | Second: ${secondTextLength} | First longer: ${compareLength}`;
// }

// console.log(makeLengthReport('terminal', 'mouse'));

// TODO: Створи функцію `hasExtension(fileName, extension)`. Функція повинна перевіряти закінчення назви файлу. Виклич її з `'notes.pdf'` і `'.pdf'`.

// function hasExtension(fileName, extension) {
//   return fileName.endsWith(extension);
// }

// console.log(hasExtension('notes.pdf', '.pdf'));
// console.log(hasExtension('notes.pdf', '.txt'));
// console.log(hasExtension('text.txt', '.txt'));

// TODO: Створи `getDomain(email)`, яка повертає частину після `@`. Потім створи `haveSameDomain(firstEmail, secondEmail)`, яка порівнює домени в нижньому регістрі. Перевір `'one@School.ORG'` і `'two@school.org'`.

// function getDomain(email) {
//   return email.slice(email.indexOf('@') + 1);
// }

// function haveSameDomain(firstEmail, secondEmail) {
//   return (
//     getDomain(firstEmail).toLowerCase() === getDomain(secondEmail).toLowerCase()
//   );
// }

// console.log(haveSameDomain('one@School.ORG', 'two@school.org'));
// console.log(haveSameDomain('one@School.ORG', 'two@schOoOl.org'));
