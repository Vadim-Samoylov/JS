//создание переменных type Integer
let item_1 = 5;
let item_2 = 3;
//создание новой переменной из суммы двух первых, вывод результата
let item_3 = item_1 + item_2;
console.log("item_3 = " + item_3);
//создание переменной type String, вывод результата
let item_4 = "Yolochka";
console.log("item_4 = " + item_4);
//вывод результата суммы и умножения двух последних переменных
console.log(item_3 + item_4);
console.log(item_3 * item_4);
//создание новой переменной со значением 'item_3'
let item_5 = 'item_3';
console.log(item_5);
// создание переменной со значением 15, вывод значения и типа переменной
let item_6 = 15;
console.log(item_6);
let item_6_type = typeof(item_6);
console.log(item_6_type);
console.log("item_6 = " + item_6, "item_6_type = " + item_6_type);
// создание переменной с заданным типом String значения item_6
let item_7 = String(item_6);
item_7_type = typeof item_7;
// вывод значения переменной с типом
console.log("item_7 = " + item_7, "item_7_type = " + item_7_type);
// Создание переменных (границ возрастов), где первая переменная служит проверочной.
// Переменные 18 и 60 границы допуска.
let age_1 = 15;
let age_2 = 18;
let age_3 = 60;
// Цикл проверки возрастов
if (age_1 < age_2)
{console.log("You don`t have access cause your age is " + age_1 + " It`s less then " + age_2);}
else if (age_1 >= age_2 && age_1 < age_3)
{console.log("Welcome !")}
else if (age_1 > age_3) {console.log("Keep calm and look Culture channel")}
else {console.log("Technical work ")};

// let u = prompt("Hello");
// console.log(u);