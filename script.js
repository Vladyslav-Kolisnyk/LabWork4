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