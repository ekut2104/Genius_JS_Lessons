// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// if (prompt("Введіть будьяке число") > 0) {
//   console.log(true);
//   alert(true);
// } else {
//   console.log(false);
//   alert(false);
// };

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// if (prompt("Введіть назву змінної") === "test") {
//   console.log(true);
//   alert(true);
// } else {
//   console.log(false);
//   alert(false);
// };

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.11

// let inputNumber = Number(prompt("Введіть будьяке число"));
// if (inputNumber > 10) {
//   console.log(inputNumber - 5);
// } else {
//   console.log(inputNumber + 5);
// };

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let number = Math.random() * (12) + 1;
// switch (Math.trunc(number)) {
//   case 1:
//     console.log("січень");
//     break;
//   case 2:
//     console.log("лютий");
//     break;
//   case 3:
//     console.log("березень");
//     break;
//   case 4:
//     console.log("квітень");
//     break;
//   case 5:
//     console.log("травень");
//     break;
//   case 6:
//     console.log("червень");
//     break;
//   case 7:
//     console.log("липень");
//     break;
//   case 8:
//     console.log("серпень");
//     break;
//   case 9:
//     console.log("вересень");
//     break;
//   case 10:
//     console.log("жовтень");
//     break;
//   case 11:
//     console.log("листопад");
//     break;
//   case 12:
//     console.log("грудень");
//     break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let max = 1000;
// let min = 100;
// let number = Math.random() * (max - min) + min;
// let newString = String(Math.trunc(number));
// let arr = newString.split("");
// console.log(arr)
// let summ = 0;
// for (let i = 0; i < arr.length; i++) {
//     summ += Number(arr[i])
// }
// console.log(summ)