// TODO Створи функцію `getFirstItem(items)`, яка повертає перший елемент масиву. Якщо масив порожній, поверни рядок `Кошик порожній`. Перевір масив `['Молоко', 'Хліб', 'Яблука']`.

// function getFirstItem(items) {
//   //   if (items.length === 0) {
//   //     return 'Кошик порожній';
//   //   }
//   //   return items[0];

//   //АБО

//   return items.length === 0 ? 'Кошик порожній' : items[0];
// }

// console.log(getFirstItem(['Молоко', 'Хліб', 'Яблука']));

// TODO Створи `calculateAverage(ratings)`. Якщо масив порожній, поверни 0. Інакше циклом знайди суму й поділи її на кількість оцінок. Перевір `[5, 4, 5, 3, 3]`.

// function calculateAverage(ratings) {
//   let sum = 0;
//   let ammount = 0;
//   if (ratings.length === 0) {
//     return 0;
//   }
//   for (const rating of ratings) {
//     if (typeof rating === 'number') {
//       sum += rating;
//       ammount++;
//     }
//   }
//   return sum / ammount;
// }

// console.log(calculateAverage([5, 4, 'gays', 5, 3, 3]));

// TODO Ціни та кількості зберігаються у двох масивах з однаковими індексами. Створи `calculateCartTotal(prices, quantities)`, яка додає `price * quantity` для кожної позиції. Перевір `[80, 25, 40]` і `[2, 3, 1]`.

// function calculateCartTotal(prices, quantities) {
//   let total = [];
//   for (let i = 0; i < prices.length; i++) {
//     total[i] = prices[i] * quantities[i];
//   }
//   return total;
// }

// console.log(calculateCartTotal([80, 25, 40], [2, 3, 1]));

// TODO Створи `applyDiscount(prices, percent)`, яка повертає новий масив цін після знижки. Для округлення до двох знаків використай `Number(value.toFixed(2))`. Не використовуй `map()`. Перевір `[100, 250, 80]`, `10`.

// function applyDiscount(price, percent) {
//   let newPrice = [];
//   for (let i = 0; i < price.length; i++) {
//     newPrice[i] = Number((price[i] * (1 - percent / 100)).toFixed(2));
//   }
//   return newPrice;
// }

// console.log(applyDiscount([100, 250, 80], 22.53));

// ****TODO Створи `paginate(items, pageSize)`, яка повертає вкладений масив сторінок. Кожна сторінка містить не більше `pageSize` елементів. Використай вкладені цикли, без `slice()` усередині розв’язання. Перевір `[1, 2, 3, 4, 5, 6, 7]`, `3`

// function paginate(items, pageSize) {
//   const pages = [];
//   for (let i = 0; i < items.length; i++) {
//     pages[i] = [];
//     for (let j = 0; j < pageSize; j++) {
//       if (i * pageSize + j < items.length) {
//         // pages[i][j] = items[i * pageSize + j];
//         pages[i].push(items[i * pageSize + j]);
//       } else {
//         return pages;
//       }
//     }
//   }
//   return pages;
// }

// console.log(paginate([1, 2, 3, 4, 5, 6, 7], 3));

// TODO Створи `cleanTags(tags)`. Для кожного рядка прибери крайні пробіли, переведи його у нижній регістр, пропусти порожні й не додавай дублікати. Перевір `[' JavaScript ', 'web', '', 'javascript', ' WEB ']`.

// function cleanTags(tags) {
//   const newTags = [];
//   for (const tag of tags) {
//     const normalizeTag = tag.trim().toLowerCase();
//     if (normalizeTag && !newTags.includes(normalizeTag)) {
//       newTags.push(normalizeTag);
//     }
//   }
//   return newTags;
// }

// console.log(cleanTags([' JavaScript ', 'web', ' ', 'javascript', ' WEB ']));

// TODO Створи `searchNames(names, query)`. Поверни новий масив назв, що містять запит без урахування регістру. Використай цикл та рядковий `includes()`. Перевір `['JavaScript Basics', 'React Start', 'Advanced JavaScript']`, `'script'`.

// function searchNames(names, query) {
//   const newNames = [];
//   for (const name of names) {
//     const normalizeName = name.toLowerCase().trim();
//     if (normalizeName.includes(query.toLowerCase())) {
//       newNames.push(normalizeName);
//     }
//   }
//   return newNames;
// }

// console.log(
//   searchNames(
//     ['JavaScript Basics', 'React Start', 'Advanced JavaScript'],
//     'Script'
//   )
// );

// TODO Створи `limitHistory(history, limit)`, яка повертає новий масив лише з останніх `limit` запитів. Початковий масив не змінюй. Перевір п’ять запитів і ліміт 3.

// const history = ['HTML', 'CSS', 'JS', 'React', 'Node'];

// function limitHistory(history, limit) {
//   if (history.length >= limit) {
//     return history.slice(history.length - limit);
//   }
//   return [];
// }

// console.log(limitHistory(history, 3));

// TODO Створи `getUnsubscribed(previous, current)`, яка повертає імена, що були у попередньому масиві, але відсутні в поточному. Перевір `['Іра', 'Макс', 'Оля']` і `['Макс', 'Оля', 'Тарас']`.

// function getUnsubscribed(previous, current) {
//   const unsubscribed = [];
//   for (const user of previous) {
//     if (!current.includes(user)) {
//       unsubscribed.push(user);
//     }
//   }
//   return unsubscribed;
// }

// console.log(getUnsubscribed(['Іра', 'Макс', 'Оля'], ['Макс', 'Оля', 'Тарас']));

// ======================================================= Part 2 =============================================//

// TODO Створи `appendCopy(items, item)`. Функція має створити копію масиву, додати `item` у кінець і повернути новий масив. Початковий масив не змінюй. Перевір `['HTML', 'CSS']` і `'JavaScript'`.

// const appendCopy = function (items, item) {
//   // const newItems = function.slice();
//   //   const newItems = Array.from(items);
//   //   newItems.push(item);
//   //   return newItems;
//   // АБО
//   //   return items.concat(item);
//   // АБО
//   return [...items, item];
// };

// console.log(appendCopy(['HTML', 'CSS'], 'JavaScript'));

// TODO Створи `prependCopy(items, item)`, яка повертає копію масиву з новим елементом на початку. Використай `slice()` та `unshift()`. Перевір `['Каталог', 'Контакти']` і `'Головна'`.

// const prependCopy = function (items, item) {
//   const newItems = items.slice();
//   newItems.unshift(item);
//   return newItems;
// };

// console.log(prependCopy(['Каталог', 'Контакти'], 'Головна'));

// TODO Створи `removeExisting(items, value)`. Поверни копію без першого входження `value`; якщо значення немає, поверни незмінену копію. Перевір `['new', 'draft', 'ready']` і `'draft'`.

// const removeExisting = function (items, value) {
//   const newItems = items.slice();
//   if (items.includes(value)) {
//     newItems.splice(items.indexOf(value), 1);
//   }
//   return newItems;
// };

// console.log(removeExisting(['new', 'draft', 'ready'], 'drafat'));

// TODO Створи допоміжні функції `normalizePhone(phone)` та `preparePhones(phones)`. Перша залишає в рядку лише цифри. Друга обробляє масив, відкидає номери не з 10 цифр і дублікати, зберігаючи порядок. Перевір `['050 123-45-67', '+38(050)1234567', '067-555-44-33', '123']`.

// const normalizePhone = function (phone) {
//   const digits = '1234567890';
//   let normalizedNumber = '';

//   for (const digit of phone) {
//     if (digits.includes(digit)) {
//       normalizedNumber += digit;
//     }
//   }
//   if (normalizedNumber.startsWith('38')) {
//     normalizedNumber = normalizedNumber.replace('38', '');
//   }
//   return normalizedNumber;
// };
// const preparePhones = function (phones) {
//   let newPhones = [];
//   for (const phone of phones) {
//     const formatedPhone = normalizePhone(phone);
//     if (formatedPhone.length === 10 && !newPhones.includes(formatedPhone)) {
//       //   newPhones.push(phone);
//       newPhones.push(formatedPhone);
//     }
//   }
//   return newPhones;
// };

// console.log(normalizePhone('050 123 - 45 - 67'));
// console.log(normalizePhone('+38(050)1234568'));

// console.log(
//   preparePhones(['050 123-45-67', '+38(050)1234567', '067-555-44-33', '123'])
// );

// TODO Створи `withoutFirst(messages)`. Функція повертає копію масиву без першого елемента. Для порожнього масиву поверни порожній масив. Перевір `['Старе', 'Нове', 'Важливе']`.

// const withoutFirst = function (messages) {
//   // const newMassage = messages.slice(1);
//   //Або
//   //   const newMassage = messages.slice();
//   //   newMassage.shift();
//   //   return newMassage;
//   //Або
//   return messages.length > 0 ? messages.slice(1) : [];
// };

// console.log(withoutFirst(['Старе', 'Нове', 'Важливе']));

// TODO Створи `replaceMatches(items, oldValue, newValue)`, яка повертає новий масив, замінюючи всі точні збіги. Не використовуй методи перебору. Перевір `['dev', 'prod', 'dev']`, `'dev'`, `'test'`.

// const replaceMatches = function (items, oldValue, newValue) {
//   const newItems = [];
//   for (const item of items) {
//     if (item === oldValue) {
//       newItems.push(newValue);
//     } else {
//       newItems.push(item);
//     }
//   }
//   return newItems;
// };

// console.log(replaceMatches(['dev', 'prod', 'dev'], 'dev', 'test'));

// TODO Створи `prepareKeywords(values)`: нормалізуй кожен рядок через `trim().toLowerCase()`, пропусти порожні, слова коротші за 2 символи та дублікати. Потім відсортуй результат за алфавітом бульбашковим сортуванням без `sort()`. Перевір `[' JS ', 'arrays', 'js', ' a ', 'Functions']`.

// const prepareKeywords = function (values) {

// }

// console.log(prepareKeywords([' JS ', 'arrays', 'js', ' a ', 'Functions']));

// TODO Кожен рядок має формат `[login, email, age]`. Створи окремі `isValidLogin`, `isValidEmail`, `isValidAge` і `validateRegistrations(rows)`. Остання повертає вкладені пари `[номер рядка, текст помилки]` для кожної знайденої помилки. Нумерація починається з 1.

// const isValidLogin = function (login) {
//   return login.length >= 3 && !login.includes(' ');
// };
// const isValidEmail = function (email) {
//   const atIndex = email.indexOf('@');
//   return atIndex >= 3 && email.includes('@gmail.com');
// };
// const isValidAge = function (age) {
//   return typeof age === 'number' && age >= 18;
// };

// const validateRegistrations = function (rows) {
//   const errors = [];
//   for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];
//     // console.log(row);
//     if (!isValidLogin(row[0])) {
//       // console.log([i + 1, `Invalid login: ${row[0]}`]);
//       errors.push([i + 1, `Invalid login: ${row[0]}`]); /// row[0] === rows[i][0]
//     }
//     if (!isValidEmail(row[1])) {
//       // console.log([i + 1, `Invalid Email: ${row[1]}`]);
//       errors.push([i + 1, `Invalid Email: ${row[1]}`]); /// row[1] === rows[i][1]
//     }
//     if (!isValidAge(row[2])) {
//       // console.log([i + 1, `Invalid age: ${row[2]}`]);
//       errors.push([i + 1, `Invalid age: ${row[2]}`]); /// row[2] === rows[i][2]
//     }
//   }
//   return errors;
// };

// console.log(
//   validateRegistrations([
//     ['An', 'anna83gmail.com', 28],
//     ['Tomy', 'tomy@gmai.com', '38'],
//     ['Bob ', 'bob@gmail.com', '17'],
//   ])
// );

// TODO Створи `toggleSelection(selected, value)`. Якщо `value` уже є у масиві, видали його з копії; якщо немає — додай. Перевір `['dark', 'compact']` і `'dark'`.

// const toggleSelection = function (selected, value) {
//   const newSelected = selected.slice();
//   const atIndex = selected.indexOf(value);
//   if (atIndex === -1) {
//     newSelected.push(value);
//   } else {
//     newSelected.splice(atIndex, 1);
//   }
//   return newSelected;
// };

// console.log(toggleSelection(['dark', 'compact'], 'dark'));

// TODO Створи `unionLists(first, second)`, яка повертає всі унікальні елементи двох масивів у порядку першої появи. Перевір `['uk', 'en']` і `['en', 'pl', 'uk']`.

// const unionList = function (first, second) {
//   const unionArr = first.concat(second);
//   const unique = [];
//   for (const element of unionArr) {
//     if (!unique.includes(element)) {
//       unique.push(element);
//     }
//   }
//   return unique;
// };

// console.log(unionList(['uk', 'en'], ['en', 'pl', 'uk']));

// TODO Створи `combineLabels(names, values)`. Для кожного індексу сформуй рядок `Назва: значення`. Опрацюй лише спільну довжину масивів. Перевір `['Views', 'Likes', 'Comments']` і `[1200, 85]`.

// const combineLabels = function (names, values) {
//   const length = names.length > values.length ? values.length : names.length;
//   const arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(`${names[i]}: ${values[i]}`);
//   }
//   return arr;
// };

// console.log(combineLabels(['Views', 'Likes', 'Comments'], [1200, 85]));
