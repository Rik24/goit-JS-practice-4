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
