
//=============== РОЗГАЛУЖЕННЯ ТА БУЛЕВІ ЗНАЧЕННЯ ===============

// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance.
// Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. 
// В іншому випадку функцію повинна повернути рядок "Goodbye".

// function security(age, balance) {
//     if (age > 18 && balance > 100) {
//         return "Wellcome";
//     } else {
//         return "Goodbye";
//     }
// }
// console.log(security(19, 101));
//==============================================================================================================================================
// Напишіть функцію яка для магазину яка приймає кількість товару(amount) та його вартість(price). 
// Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого".

// function shop(amount, price) {
//     const totalPrice = amount * price;
//     if (totalPrice <= 1000) {
//         return "Ми це купуємо"
//     } else {
//         return "Це занадто дорого"
//     }
// }
// console.log(shop(10, 100));
//==============================================================================================================================================
// Напишіть функцію, яка приймає температуру(temp) в градусах Цельсія. 
// Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".

// function couldly(temp) {
//     if (temp < 0) {
//         return "Замерзає"
//     } else if (0 <= temp && temp < 25) {
//         return "Нормальна температура";
//     } else {
//         return "Спекотно";
//     }
// }
// console.log(couldly(-1));
//==============================================================================================================================================
// Напишіть функцію, яка приймає 2 числа: number та divisor. 
// Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".

// function share(number, divisor) {
//     const result = number & divisor;
//     if (result === 0) {
//         return "Ділиться";
//     } else {
//         return "Не ділиться"
//     }
// }
// console.log(share(100, 10));
//==============================================================================================================================================
// Напишіть функцію, яка приймає 2 параметри: isRaining(булевий) і hasUmbrella(булевий). 
// Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".

// function perevirkaRains(isRaining, hasUmbrella) {
//     const yesRaining = isRaining;    //true
//     const yesUmbrella = hasUmbrella; //true
//     if (yesRaining && yesUmbrella) {
//         return "Не змокнеш";
//     } else if (yesRaining || yesUmbrella) {
//         return "Змокнеш";
//     } else {
//         return "Без дощу";
//     }
// }
// console.log(perevirkaRains(true, true));
//==============================================================================================================================================
// Напишіть функцію, яка приймає оцінку студента(grade) за шкалою від 0 до 100. 
// Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".

// function  student(grade) {
//     if (grade >= 90) {
//         return "Відмінно";
//     } else if (grade >= 75 && grade <= 89) {
//         return "Добре";
//     } else if (grade >= 50 && grade <= 74) {
//         return "Задовільно";
//     } else {
//         return "Незадовільно"
//     }
// }
// console.log(student(90));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. 
// Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день".

// function  isDays(dayOfWeek, isHoliday) {
//     if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday" || isHoliday) {
//         return "Вихідний";
//     } return "Робочий день";
// }
// console.log(isDays("Saturday", true));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри: hasInvitation(булевий) і isFriend(булевий). 
// Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".

// function exitHostel(hasInvitation, isFriend) {
//     if (hasInvitation && isFriend) {
//         return "Ви запрошені";
//     } return "Вхід заборонено";
// }
// console.log(exitHostel(true, true));
//==============================================================================================================================================
// Напишіть функцію, яка приймає вік особи (age).
// Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".

// function agePerson(age) {
//     if (age <= 12) {
//         return "Дитина";
//     } else if (age >  12 && age <= 18) {
//         return "Підліток"
//     } else if (age > 18 && age <= 60) {
//         return "Дорослий";
//     } else if (age > 60) {
//         return "Пенсіонер";
//     }
// }
// console.log(agePerson(61));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). 
// Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, 
// поверніть "Користувач", в іншому випадку - "Гість".

// function enterSystem(isLoggedIn, hasAdminRights) {
//     if (isLoggedIn && hasAdminRights) {
//         return "Адмін-сторінка";
//     } else if (isLoggedIn || hasAdminRights) {
//         return "Користувач";
//     } else {
//         return "Гість";
//     }
// }
// console.log(enterSystem(true, true));
//==============================================================================================================================================
// Напишіть функцію, яка приймає один параметр speed.
// Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".

// function speedAuto(speed) {
//     if (speed <= 60) {
//         return "Безпечно";
//     } else if (speed > 60 && speed <= 100) {
//         return "Увага";
//     } else if (speed > 100) {
//         return "Небезпечно";
//     }
// }
// console.log(speedAuto(60));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри: time та isWeekend. 
// Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", 
// якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".

// function  dayTime(time, isWeekend) {
//     if (time <= 12 && isWeekend) {
//         return "Ранок буднього дня";
//     } else if (time > 12 && time <= 18 && !isWeekend) {
//         return "День вихідного дня";
//     } else {
//         return "Вечір"
//     }
// }
// console.log(dayTime(12, true));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). 
// Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".

// function  alergyGluten(hasGlutenAllergy, containsGluten) {
//     if (hasGlutenAllergy && containsGluten) {
//         return "Не можна їсти";
//     } else {
//         return "Можна їсти";
//     }
// }
// console.log(alergyGluten(true, true));
//==============================================================================================================================================
// Напишіть функцію, яка приймає один параметр age. 
// Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".

// function drinkInAlcohol(age) {
//     if (age < 18) {
//         return "Не можна купувати алкоголь";
//     } else {
//         return "Можна купувати алкоголь";
//     }
// }
// console.log(drinkInAlcohol(18));
//==============================================================================================================================================
// Напишіть функцію, яка приймає один параметр isSunny (булевий). 
// Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".

// function goWentn(isSunny) {
//     if (isSunny === true) {
//         return "Вийдемо на прогулянку";
//     } else if (isSunny === false) {
//         return "Залишимося вдома";
//     }
// }
// console.log(goWentn(true));
//==============================================================================================================================================
// Напишіть функцію, яка приймає один параметр number. 
// Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".

// function isParametr(number) {  
//     const result = number % 2;
//     if (result === 0) {  
//         return "Парне";
//     }  
//     return "Непарне";
// }  
// console.log(isParametr(8));
//==============================================================================================================================================
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. 
// Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".

// function signParrol(password, confirmPassword) {
//     if (password === confirmPassword) {
//         return "Паролі збігаються"; 
//     } return "Паролі не збігаються";
// }
// console.log(signParrol('itproger','"Паролі не збігаються"'));
//==============================================================================================================================================
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. 
// Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", 
// якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".

// function parametr(temperature) {
//     if (temperature < 0) {
//         return "Зима";
//     } else if (temperature >= 0 && temperature <= 15) {
//         return "Весна";
//     } else if (temperature > 15 && temperature <= 25) {
//         return "Осінь";
//     } else {
//         return "Літо";
//     }
// }
// console.log(parametr(26));
//==============================================================================================================================================
// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. 
// Якщо number1 більше number2, поверніть "Перше більше", 
// якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".

// function choceNumber(number1, number2) {
//     if (number1 > number2) {
//         return "Перше більше";
//     } else if (number2 > number1) {
//         return "Перше менше";
//     } else {
//         return "Рівні";
//     }
// }
// console.log(choceNumber(25, 25));
//==============================================================================================================================================






//==============================================================================================================================================








//==============================================================================================================================================







//==============================================================================================================================================
