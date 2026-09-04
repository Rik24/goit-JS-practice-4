// TODO Створи функцію `createUser(name, age, isActive)`, яка повертає об’єкт із властивостями `name`, `age` та `isActive`. Назви параметрів і властивостей збігаються, тому використай скорочений запис властивостей. Перевір дані `'Олена'`, `24`, `true`.

// function createUser(name, age, isActive) {
//   return {
//     name, //name: 'Олена',
//     age, //age: 24,
//     isActive, //isActive: true,
//   };
// }

// console.log(createUser('Олена', 24, true));

// TODO Створи `normalizeUsers(users)`. Для кожного користувача поверни новий об’єкт: `id` залиш без змін, `name` очисть методом `trim()`, `email` переведи в нижній регістр, а відсутній `isActive` заміни на `false`. Не змінюй вхідний масив та об’єкти.

// const users = [
//   { id: 1, name: '  Анна ', email: ' ANNA@MAIL.COM ' },
//   { id: 2, name: 'Ігор', email: 'IGOR@MAIL.COM', isActive: true },
// ];

// function normalizeUsers(users) {
//   const newUsers = [];
//   for (const user of users) {
//     const newUser = {
//       id: user.id,
//       name: user.name.trim(),
//       email: user.email.toLowerCase().trim(),
//       //   isActive: user.isActive === undefined ? false : user.isActive,
//       isActive: user.isActive === true,
//       //   isActive: user.isActive ?? false, // "??" undefind || null
//       //   isActive: user.isActive || false, // "??" undefind || null
//     };
//     newUsers.push(newUser);
//   }
//   return newUsers;
// }

// console.log(normalizeUsers(users));

// TODO Створи `normalizeCatalog(response)`. `response` має поле `items`; кожен товар містить вкладений `price: { amount, currency }`, масив `tags` і необов’язковий `stock`. Поверни об’єкт `{ products, total }`, де товари мають плоскі поля `id`, `name`, `price`, `currency`, `tags`, `inStock`. Копіюй масив тегів; `inStock` істинний лише при `stock > 0`.

// const response = {
//   items: [
//     {
//       id: 1,
//       name: ' Mouse ',
//       price: { amount: 500, currency: 'UAH' },
//       tags: ['tech'],
//       stock: 3,
//     },
//     {
//       id: 2,
//       name: 'Book',
//       price: { amount: 250, currency: 'UAH' },
//       tags: [],
//       stock: 0,
//     },
//   ],
// };

// function normalizeCatalog(response) {
//   const products = [];
//   for (const item of response.items) {
//     const product = {
//       id: item.id,
//       name: item.name.trim(),
//       price: item.price.amount,
//       currency: item.price.currency,
//       tags: item.tags.slice(),
//       inStock: item.stock > 0,
//     };
//     products.push(product);
//   }
//   return {
//     products, //products: products
//     total: products.length,
//   };
// }

// console.log(normalizeCatalog(response));

// TODO Створи `getProfileLabel(user)`. Функція отримує об’єкт користувача та повертає рядок у форматі `Ім’я — місто`. Якщо властивості `city` немає або вона містить порожній рядок, замість міста виведи `місто не вказано`. Перевір `{ name: 'Максим', city: '' }`.

// function getProfileLabel(user) {
//   //   return user.city ? `${user.name} - ${user.city}` : `${user.name} - місто не вказано`;
//   return `${user.name} - ${user.city || 'місто не вказано'}`;
// }

// console.log(getProfileLabel({ name: 'Максим', city: '' }));
// console.log(getProfileLabel({ name: 'Максим' }));
// console.log(getProfileLabel({ name: 'Андрей', city: 'Одесса' }));

// TODO Створи `searchContacts(contacts, query)`. Поверни копії контактів, у яких `name` або `email` містить `query` без урахування регістру. Якщо після `trim()` запит порожній, поверни копії всіх контактів. Не використовуй `filter()`.

// const contacts = [
//   { name: 'Anna', email: 'anna@mail.com' },
//   { name: 'Bohdan', email: 'dev@site.com' },
//   { name: 'Bohdanmail', email: 'dev@site.com' },
// ];

// // const newContacts = structuredClone(contacts); // contacts[0] === newContacts[0] // false
// // const newContacts = [...contacts]; // contacts[0] === newContacts[0] //true
// // console.log(newContacts);
// // console.log(contacts[0] === newContacts[0]);

// function searchContacts(contacts, query) {
//   const newContacts = [];
//   for (const contact of contacts) {
//     // const newContact = {
//     //   name: contact.name,
//     //   email: contact.email,
//     //   };

//     // if (!query.trim()) {
//     //   newContacts.push(newContact);
//     // } else
//     if (
//       contact.name.toLowerCase().includes(query.trim().toLowerCase()) ||
//       contact.email.toLowerCase().includes(query.trim().toLowerCase())
//     ) {
//       //   newContacts.push(newContact);
//       newContacts.push({ ...contact });
//     }
//   }
//   return newContacts;
// }

// console.log(searchContacts(contacts, 'MAIL'));

// TODO Створи `groupProducts(products)`. Поверни об’єкт, де кожна властивість має назву категорії, а її значенням є масив копій товарів цієї категорії. Категорії заздалегідь невідомі. Використай звичайний цикл.

// const products = [
//   { name: 'Mouse', category: 'tech' },
//   { name: 'Book', category: 'books' },
//   { name: 'Cable', category: 'tech' },
// ];

// function groupProducts(products) {
//   const result = {};
//   for (const product of products) {
//     if (!result[product.category]) {
//       result[product.category] = [];
//     }
//     // if (product.category === result[product.category]) { // Не правильно: 'tech' !== []
//     // if (Object.keys(result).includes(product.category)) {
//     result[product.category].push({ ...product });
//     // }
//   }
//   return result;
// }

// console.log(groupProducts(products));
// //Очікуваний результат:
// const result = {
//   tech: [
//     { name: 'Mouse', category: 'tech' },
//     { name: 'Cable', category: 'tech' },
//   ],
//   books: [{ name: 'Book', category: 'books' }],
// };

// =================================================================== Part 2 ========================================================= //

// TODO Створи `createTagList(...tags)`. Rest-параметр має зібрати всі передані теги в масив. Поверни новий масив, у якому кожен тег починається із `#`. Використай звичайний цикл. Перевір `'js'`, `'frontend'`, `'practice'`.

// function createTagList(...tags) {
//   const tagList = [];
//   for (const tag of tags) {
//     tagList.push(`#${tag}`);
//   }
//   return tagList;
// }

// console.log(createTagList('js', 'frontend', 'practice'));

// TODO Створи `indexById(items)`. Перетвори масив об’єктів на об’єкт-довідник: ключем має бути `id`, а значенням — копія відповідного запису. Вважай ID унікальними. Перевір два записи.

// function indexById(items) {
//   const newItems = {};
//   for (const item of items) {
//     newItems[item.id] = item;
//   }
//   return newItems;
// }

// console.log(
//   indexById([
//     { id: 10, title: 'A' },
//     { id: 20, title: 'B' },
//   ])
// );

// TODO Є масив `users` з `id` і `name` та масив `statuses` з `userId` і `online`. Створи `attachStatuses(users, statuses)`, яка повертає новий масив користувачів із полем `online`. Якщо статус не знайдено, встанови `false`.

// const users = [
//   { id: 1, name: 'Анна' },
//   { id: 2, name: 'Ігор' },
// ];

// const statuses = [{ userId: 2, online: true }];

// function attachStatuses(users, statuses) {
//   const attachedUsers = [];
//   for (const user of users) {
//     let online = false;
//     for (const status of statuses) {
//       if (user.id === status.userId) {
//         online = status.online;
//         break;
//       }
//     }
//     attachedUsers.push({ ...user, online });
//   }
//   return attachedUsers;
// }

// console.log(attachStatuses(users, statuses));

// TODO Створи `getFilledValues(data)`. Отримай значення через `Object.values()` і звичайним циклом поверни новий масив без порожніх рядків. Нуль і `false` вважай заповненими значеннями. Перевір `{ name: 'Анна', city: '', attempts: 0, subscribed: false }`.

// function getFilledValues(data) {
//   const dataValues = Object.values(data);
//   const newValues = [];
//   for (const value of dataValues) {
//     if (value !== '') {
//       newValues.push(value);
//     }
//   }
//   return newValues;
// }

// console.log(
//   getFilledValues({ name: 'Анна', city: '', attempts: 0, subscribed: false })
// );

// TODO Створи `changeCity(user, city)`. Об’єкт користувача має вкладений об’єкт `address`. Поверни новий об’єкт користувача з новим `address.city`, зберігши інші поля користувача й адреси. Не змінюй жоден вхідний об’єкт.
// const user = {
//   id: 1,
//   name: 'Олег',
//   address: { city: 'Київ', street: 'Садова' },
// };

// function changeCity(user, city) {
//   //   const newUser = structuredClone(user);
//   //   newUser.address.city = city;
//   //   return newUser;
//   ///
//   //   return { ...user, address: { ...user.address, city: city } };
//   return { ...user, address: { ...user.address, city } }; // SHORT PROPERTY city: city;
// }

// console.log(changeCity(user, 'Львів'));

// TODO Створи `applyDefaults(defaults, custom)`. Функція має об’єднати два об’єкти так, щоб властивості `custom` замінювали однойменні властивості `defaults`. Перевір стандартні `{ theme: 'light', pageSize: 10 }` та користувацькі `{ pageSize: 25 }`.

// function applyDefaults(defaults, custom) {
//   return {
//     ...defaults,
//     ...custom,
//   };
// }

// console.log(applyDefaults({ theme: 'light', pageSize: 10 }, { pageSize: 25 }));

// TODO Створи `validateSignup(form)`. Поверни об’єкт помилок: додай `name`, якщо ім’я після `trim()` коротше 2 символів; `email`, якщо немає `@`; `password`, якщо пароль коротший 8 символів. Коректні поля не додавай. Перевір некоректну форму.

// function validateSignup(form) {
//   const errors = {};
//   if (form.name.trim().length < 2) {
//     errors.name = `ім’я надто коротке`;
//   }
//   if (!form.email.includes('@')) {
//     errors.email = `email немає '@'`;
//   }
//   if (form.password.length < 8) {
//     errors.password = `password мiнiмум 8 символiв`;
//   }
//   return errors;
// }

// console.log(
//   validateSignup({ name: ' A ', email: 'mail.com', password: '1234' })
// );

// TODO Створи `pickFields(data, allowedKeys)`. Поверни новий об’єкт лише з тими власними властивостями `data`, назви яких є в `allowedKeys`. Відсутні ключі пропускай. Перевір профіль і список `['name', 'city']`.

// function pickFields(data, allowedKeys) {
//   const newData = {};
//   const dataKeys = Object.keys(data);
//   for (const key of allowedKeys) {
//     if (dataKeys.includes(key)) {
//       newData[key] = data[key];
//     }
//   }

//   return newData;
// }

// console.log(
//   pickFields({ id: 1, name: 'Іра', email: 'i@mail.com', city: 'Київ' }, [
//     'name',
//     'city',
//   ])
// );

// TODO Створи `omitFields(data, blockedKeys)`. Поверни новий об’єкт без властивостей, назви яких містяться в `blockedKeys`. Рішення має працювати з довільними ключами, тому використай `Object.keys()` і цикл.

// function omitFields(data, blockedKeys) {
//   const newData = {};
//   const dataKeys = Object.keys(data);

//   for (const key of dataKeys) {
//     if (!blockedKeys.includes(key)) {
//       newData[key] = data[key];
//     }
//   }
//   return newData;
// }

// console.log(
//   omitFields({ id: 1, name: 'Іра', token: 'abc', password: '123' }, [
//     'token',
//     'password',
//   ])
// );

// === по 19:00

// TODO Створи `stringifyQuery(params)`. Перебери об’єкт і сформуй рядок `ключ=значення`, з’єднавши пари символом `&`. Властивості з порожнім рядком або значенням `null` пропускай. Для спрощення кодування URL не потрібне.

// function stringifyQuery(params) {
//   const newParams = [];
//   const paramKeys = Object.keys(params);
//   for (const key of paramKeys) {
//     if (params[key] !== '' && params[key] !== null) {
//       newParams.push(`${key}=${params[key]}`);
//     }
//   }
//   return newParams.join('&');
// }

// console.log(
//   stringifyQuery({ page: 2, search: '', sort: 'price', compact: false })
// );

// TODO ****** Створи `mergePages(...pages)`. Кожна сторінка — масив об’єктів із `id` та числовим `updatedAt`. Поверни по одному запису на ID: якщо ID повторюється, збережи версію з більшим `updatedAt`. Порядок має відповідати першій появі ID. Усі записи скопіюй.

// const first = [
//   { id: 1, value: 'old', updatedAt: 10 },
//   { id: 2, value: 'B', updatedAt: 5 },
// ];

// const second = [
//   { id: 1, value: 'new', updatedAt: 20 },
//   { id: 3, value: 'C', updatedAt: 7 },
// ];
// const third = [
//   { id: 4, value: 'Super', updatedAt: 20 },
//   { id: 5, value: 'Hot', updatedAt: 7 },
// ];
// const fourth = [
//   { id: 5, value: 'Cold', updatedAt: 21 },
//   { id: 6, value: 'H', updatedAt: 8 },
// ];

// function mergePages(...pages) {
//   //   const arr = pages.flatMap(page => page); // Так можна
//   //   console.log(arr);
//   //
//   let newPages = [];
//   for (const page of pages) {
//     newPages = newPages.concat(page);
//     // console.log(page[0] === newPages[0]); // ссылки на объекты пока что те же
//   }
//   const result = [];
//   const uniqueIds = [];
//   for (const item of newPages) {
//     if (!uniqueIds.includes(item.id)) {
//       uniqueIds.push(item.id);
//       result.push({ ...item }); // тут их переприсваивыем
//     } else {
//       for (let i = 0; i < result.length; i++) {
//         if (result[i].id === item.id && result[i].updatedAt < item.updatedAt) {
//           result.splice(i, 1, item);
//         }
//       }
//     }
//   }
//   console.table(newPages);
//   return result;
// }

// console.table(mergePages(first, second, third, fourth));

// TODO Створи `summarizeCart(cart)`. Для масиву позицій із `price` та `quantity` поверни об’єкт `{ positions, units, total }`: кількість позицій, загальну кількість одиниць і повну вартість. Перевір дві позиції.

// function summarizeCart(cart) {
//   let units = 0;
//   let total = 0;
//   for (const unit of cart) {
//     units += unit.quantity;
//     total += unit.price * unit.quantity;
//   }

//   return {
//     positions: cart.length,
//     units,
//     total,
//   };
// }

// console.table(
//   summarizeCart([
//     { price: 100, quantity: 2 },
//     { price: 250, quantity: 1 },
//   ])
// );

// TODO ****** Створи `moveTask(board, taskId, newStatus)`. `board` — об’єкт, де ключі є статусами, а значення — масивами задач. Поверни новий об’єкт дошки: знайдену задачу видали зі старого масиву, додай у новий і онови її `status`. Вважай новий статус наявним.

// const board = {
//   todo: [{ id: 1, title: 'A', status: 'todo' }],
//   done: [{ id: 2, title: 'B', status: 'done' }],
// };

// function moveTask(board, taskId, newStatus) {
//   const newBoard = {};
//   const statuses = Object.keys(board);
//   let movedTask = null;
//   for (let i = 0; i < statuses.length; i++) {
//     const status = statuses[i];
//     newBoard[status] = [];
//     for (let i = 0; i < board[status].length; i++) {
//       const task = board[status][i];
//       if (task.id === taskId) {
//         movedTask = { ...task, status: newStatus };
//       } else {
//         newBoard[status].push({ ...task });
//       }
//     }
//   }
//   if (movedTask) {
//     newBoard[newStatus].push(movedTask);
//   }

//   return newBoard;
// }

// console.log(moveTask(board, 1, 'done'));
