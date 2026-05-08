//=====Завдання 1. Змінні та типи даних=====
// 1. Оголосіть змінні кожного примітивного типу: string , number , boolean , null , undefined , symbol , bigint . Для кожної змінної виведіть її значення та тип за допомогою typeof
//  .
const stringVariable = "string type";
console.log(`Значення змінної = ${stringVariable}, тип змінної = ${typeof(stringVariable)}`);

const numberVariable = 123;
console.log(`Значення змінної = ${numberVariable}, тип змінної = ${typeof(numberVariable)}`);

const booleanVariable = true;
console.log(`Значення змінної = ${booleanVariable}, тип змінної = ${typeof(booleanVariable)}`);

const nullVariable = null;
console.log(`Значення змінної = ${nullVariable}, тип змінної = ${typeof(nullVariable)}`);

const undefinedVariable = undefined;
console.log(`Значення змінної = ${undefinedVariable}, тип змінної = ${typeof(undefinedVariable)}`);

const symbolVariable = Symbol("symbol type");
console.log(`Значення змінної = ${String(symbolVariable)}, тип змінної = ${typeof(symbolVariable)}`);

const bigintVariable = BigInt(10000000000000000000000);
console.log(`Значення змінної = ${String(bigintVariable)}, тип змінної = ${typeof(bigintVariable)}`);

//2. Продемонструйте явне перетворення типів

const numberToString = 123;
const stringFromNumber = String(numberToString);
console.log(`Рядок з числа ${numberToString} = ${stringFromNumber}`);

const booleanToString = true
const stringFromBoolean = String(booleanToString);
console.log(`Рядок з boolean ${booleanToString} = ${stringFromBoolean}`)

const stringToNumber = "123";
const numberFromString  = Number(stringToNumber);
console.log(`Число з рядку ${stringToNumber} = ${numberFromString}`)

const emptyStingToNumber = "";
const numberFromEmptyString = Number(emptyStingToNumber);
console.log(`Число з рядку "" = ${numberFromEmptyString}`)

const booleanToNumber = true;
const numberFromBoolean = Number(booleanToNumber);
console.log(`Число з boolean ${booleanToNumber} = ${numberFromBoolean}`)

const nullToNumber = null;
const numberFromNull = Number(nullToNumber);
console.log(`Число з ${nullToNumber} = ${numberFromNull}`)

const undefinedToNumber = undefined;
const numberFromUndefined = Number(undefinedToNumber);
console.log(`Число з ${undefinedToNumber} = ${numberFromUndefined}`)

const numberToBoolean = 0;
const booleanFromNumber = Boolean(numberToBoolean);
console.log(`Boolean з числа ${numberToBoolean} = ${booleanFromNumber}`);

const stringToBoolean = "";
const booleanFromString = Boolean(stringToBoolean);
console.log(`Boolean з рядку ${stringToBoolean} = ${booleanFromNumber}`);

const nullToBoolean = null;
const booleanFromNull = Boolean(nullToBoolean);
console.log(`Boolean з ${nullToBoolean} = ${booleanFromNull}`);

const undefinedToBoolean = undefined;
const booleanFromUndefined = Boolean(undefinedToBoolean);
console.log(`Boolean з ${undefinedToBoolean} = ${booleanFromUndefined}`);

const NaNToBoolean = NaN;
const booleanFromNaN = Boolean(NaNToBoolean);
console.log(`Boolean з ${NaNToBoolean} = ${booleanFromNaN}`);

// 3. Використайте шаблонні рядки (template literals) для форматованого виведення інформації.

const name = "Владислав";
const lastName = "Колісник"
const age = 21;
const university = "ХАІ";
const specialtyNumber = 172
console.log(`Ім'я: ${name}, прізвище: ${lastName} вік: ${age}, університет: ${university}, спеціальність: ${specialtyNumber}`);

// 4. Продемонструйте різницю між == та === на кількох прикладах (мінімум 3)

console.log(`123 == "123" = ${123 == "123"}`);
console.log(`123 === "123" = ${123 === "123"}`);

console.log(`null == undefined = ${null == undefined}`);
console.log(`null === undefined = ${null === undefined}`);

console.log(`false == "" = ${false == ""}`);
console.log(`false === "" = ${false === ""}`);

//=====Завдання 2. Умови та логіка=====
// 1. Створіть функцію getGrade(score) , яка приймає бал від 0 до 100 і повертаєоцінку за шкалою

function getGrade(score) {
    if (typeof(score) !== "number") {
        return "невалідний бал";
    }

    if (score >= 0 && score <= 59) {
        return "незадовільно";
    } else if (score >= 60 && score <= 74) {
        return "задовільно";
    } else if (score >= 75 && score <= 89) {
        return "добре";
    } else if (score >= 90 && score <= 100) {
        return "відмінно";
    } else {
        return "невалідний бал";
    }
}

console.log(`Результат виконання функції getGrade з аргументом 30 = ${getGrade(30)}`);
console.log(`Результат виконання функції getGrade з аргументом 65 = ${getGrade(65)}`);
console.log(`Результат виконання функції getGrade з аргументом 79 = ${getGrade(79)}`);
console.log(`Результат виконання функції getGrade з аргументом 95 = ${getGrade(95)}`);
console.log(`Результат виконання функції getGrade з аргументом 999 = ${getGrade(999)}`);
console.log(`Результат виконання функції getGrade з аргументом "вісімдесят" = ${getGrade("вісімдесят")}`);

// 2. Напишіть функцію getSeasonUA(month) , яка приймає номер місяця (1–12) і повертає назву пори року українською. Використайте оператор switch .

function getSeasonUA(month) {
    let result;
    
    switch (month) {
        case 1:
            result = "Зима";
            break;
        case 2:
            result = "Зима";
            break;
        case 3:
            result = "Весна";
            break;
        case 4:
            result = "Весна";
            break;
        case 5:
            result = "Весна";
            break;
        case 6:
            result = "Літо";
            break;
        case 7:
            result = "Літо";
            break;
        case 8:
            result = "Літо";
            break;
        case 9:
            result = "Осінь";
            break;
        case 10:
            result = "Осінь";
            break;
        case 11:
            result = "Осінь";
            break;
        case 12:
            result = "Зима";
            break;
        default:
            result = "Невалідний номер місяця";
    }

    return result;
}

console.log(`Результат виконання функції getSeasonUA з аргументом 1 = ${getSeasonUA(1)}`);
console.log(`Результат виконання функції getSeasonUA з аргументом 3 = ${getSeasonUA(3)}`);
console.log(`Результат виконання функції getSeasonUA з аргументом 6 = ${getSeasonUA(6)}`);
console.log(`Результат виконання функції getSeasonUA з аргументом 9 = ${getSeasonUA(9)}`);
console.log(`Результат виконання функції getSeasonUA з аргументом -1 = ${getSeasonUA(-1)}`);

// 3. Перепишіть просту умовну перевірку за допомогою тернарного оператора

function isPositive(num) {
    return num >= 0 ? true : false
}

console.log(`Результат виконання функції isPositive з аргументом 1 = ${isPositive(1)}`);
console.log(`Результат виконання функції isPositive з аргументом -1 = ${isPositive(-1)}`);