// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function nomberString(str1, str2) {
//     const str1New = str1[0];
//     const str2New = str2[str2.length - 1];
//     if (str1New === str2New) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(nomberString('Hello', 'elloH'));
//==============================================================================================================================================
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function indexString(str1, str2) {
//     const str1FirstLetter = str1[0];
//     const str2FirstLetter = str2[0];
//     if (str1FirstLetter === str2FirstLetter) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(indexString('Hello', 'Hello'));
//==============================================================================================================================================
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function lengthString(str1, str2) {
//     const str1Length = str1.length;
//     const str2Length = str2.length;
//     if (str1Length === str2Length) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(lengthString('Schoolbag', 'Schoolbag'));
//==============================================================================================================================================
// Напишіть функцію яка приймає число num.
// Функція повинна повернути булеве значення true якщо кількість цифр у числі парна.
// В іншому випадку функція повинна повернути булеве значення false.

//     function equelString (num) {
//     const numString = String(num);
//     const numLength = numString.length;
//     const numDeviced = numLength % 2;
//     if (numDeviced === 0) {
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(equelString('firstname lastname'));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2.
// В іншому випадку функція повинна повернути булеве значення false.

// function parametrString(num1, num2) {
//     if (num1 > num2) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(parametrString(55, 53));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі.
// В іншому випадку функція повинна повернути булеве значення false.

// function parametrString(num1, num2) {
//     const perevirkaNumber = num1 % num2;
//     if (perevirkaNumber === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(parametrString(50, 25));
//==============================================================================================================================================
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є непарним числом.
// В іншому випадку функція повинна повернути булеве значення false.

// function equelNumber(num) {
//     const result = num % 2;
//     if (result === 0) {
//         return !true;
//     } else {
//         return !false;
//     }
// }
// console.log(equelNumber(100));
//==============================================================================================================================================
// Напишіть функцію, яка приймає параметр str.
// Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру.
// В іншому випадку функція повинна повернути булеве значення false.

// function perevirkaString(str) {
//     if (str === str.toLowerCase()) {
//         return !true;
//     } else {
//         return !false;
//     }
// }
// console.log(perevirkaString('University'));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2. 
// В іншому випадку функція повинна повернути булеве значення false.

// function lengthString(str1, str2) {
//     if (str1.length > str2.length) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(lengthString("firstname", "lastname"));
//==============================================================================================================================================
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. 
// В іншому випадку функція повинна повернути булеве значення false.

function perevirkaString(str) {
    if (str.includes(' ')) {
        return true;
    } else {
        return false;
    }
}
console.log(perevirkaString('Mazun Volodymyr'));
//==============================================================================================================================================