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

//=====Завдання 3. Масиви=====
// 1. Створіть масив students , який містить мінімум 6 обʼєктів

const students = [
    {
        name: "Олена Коваленко",
        grade: 87,
        courses: ["JavaScript", "HTML", "CSS"]
    },
    {
        name: "Іван Іванов",
        grade: 65,
        courses: ["JavaScript", "HTML", "CSS", "React"]
    },
    {
        name: "Василь Петренко",
        grade: 23,
        courses: ["JavaScript", "HTML", "CSS", "Node", "ExpressJS"]
    },
    {
        name: "Інна Іваненко",
        grade: 99,
        courses: ["C", "STM32", "AVR"]
    },
    {
        name: "Семен Семенов",
        grade: 93,
        courses: ["JavaScript", "HTML", "CSS", "Go"]
    },
    {
        name: "Галина Шевченко",
        grade: 76,
        courses: ["JavaScript", "HTML", "CSS", "Figma"]
    }
];

console.log(`Масив до модифікацій = ${JSON.stringify(students)}`);

// 2. Продемонструйте методи модифікації масиву

students.push(
    {
        name: "Сергій Сергєєв",
        grade: 51,
        courses: ["JavaScript", "HTML", "CSS", "Figma", "VueJS"]
    }
);
console.log(`Масив піся операції push = ${JSON.stringify(students)}`);

students.pop();
console.log(`Масив піся операції pop = ${JSON.stringify(students)}`);

students.splice(3, 1);
console.log(`Масив піся видалення студенту з середини масиву = ${JSON.stringify(students)}`);

students.splice(
    3, 
    0,     
    {
        name: "Сергій Сергєєв",
        grade: 51,
        courses: ["JavaScript", "HTML", "CSS", "Figma", "VueJS"]
    }
);
console.log(`Масив піся додавання студенту в середину масиву = ${JSON.stringify(students)}`);

// 3. Знайдіть першого студента з оцінкою вище 90 за допомогою find .

function checkGrade(student) {
    return student.grade > 90;
}

const studentOver90 = students.find(checkGrade);
console.log(`Студент з оцінкою вище за 90 = ${JSON.stringify(studentOver90)}`);

// 4. Відфільтруйте всіх студентів, які вивчають курс "JavaScript" , за допомогою filter .

function checkCourses(student) {
    return student.courses.indexOf("JavaScript") > -1;
}

const studentStudyingJS = students.filter(checkCourses);
console.log(`Студенти, що вивчають JavaScript = ${JSON.stringify(studentStudyingJS)}`);

// 5. Обчисліть середню оцінку всіх студентів за допомогою reduce .

function calculateAverage(average, student) {
    return average + student.grade / students.length;
}

const averageGrade = students.reduce(calculateAverage, 0);
console.log(`Середня оцінка = ${averageGrade}`);

//=====Завдання 4. Функції=====
// 1. Напишіть одну й ту саму функцію (наприклад, обчислення площі прямокутника)трьома способами: Function Declaration, Function Expression, Arrow Function

function rectangleAreaDeclaration(a, b) {
    return a * b;
}

rectangleAreaExpression = function(a, b) {
    return a * b;
}

rectangleAreaArrow = (a, b) => {
    return a * b;
}

console.log(`Результат виконання функції заданої способом Function Declaration з операндами 2, 4 = ${rectangleAreaDeclaration(2, 4)}`);
console.log(`Результат виконання функції заданої способом Function Expression з операндами 2, 4 = ${rectangleAreaExpression(2, 4)}`);
console.log(`Результат виконання функції заданої способом Arrow Function з операндами 2, 4 = ${rectangleAreaArrow(2, 4)}`);

// 2. Створіть функцію-замикання createCounter() , яка повертає обʼєкт з методами increment() , decrement() та getValue()

function createCounter() {
    value = 0;

    const increment = () => {
        value++;
    }

    const decrement = () => {
        value--;
    }

    const getValue = () => {
        return value;
    }

    return {increment, decrement, getValue};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(`Значення counter.getValue() = ${counter.getValue()}`);

// 3. Напишіть функцію з параметрами за замовчуванням

function createUser(name, role = "student", isActive = true) {
    return {name, role, isActive};
}

console.log(`Результат виконання функції createUser з параметрами Василь = ${JSON.stringify(createUser("Василь"))}`);
console.log(`Результат виконання функції createUser з параметрами Євген, студент, false = ${JSON.stringify(createUser("Євген", "студент", false))}`);

// 4. Напишіть функцію з rest-параметрами, яка приймає довільну кількість чисел і повертає їх суму

const sum = (...numbers) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }

    return total;
};

console.log(`Результат виконання функції sum з параметрами 1, 2, 3 = ${sum(1, 2, 3)}`);
console.log(`Результат виконання функції sum з параметрами 10, 20 = ${sum(10, 20)}`);

// 5. Напишіть функцію, яка використовує деструктуризацію в параметрах

function averageOfThree([a, b, c]) {
    return (a + b + c) / 3;
}

const arrayOfThreeNumbers = [1, 2, 3];
console.log(`Результат виконання функції averageOfThree з параметрами ${arrayOfThreeNumbers} = ${averageOfThree(arrayOfThreeNumbers)}`);

//=====Завдання 5. Обʼєкти=====
// 1. Створіть обʼєкт studentProfile з такими властивостями:
// firstName , lastName (рядки)
// age (число)
// university (рядок)
// grades (обʼєкт із предметами та оцінками, наприклад:
// { math: 85, physics: 92 } )
// isActive (boolean)
// Метод getFullName() , що повертає повне імʼя
// Метод getAverageGrade() , що обчислює середню оцінку з усіх предметів

const studentProfile = {
    firstName: "Василь",
    lastName: "Петренко",
    age: 19,
    university: "КПІ",
    grades: {
        math: 85, 
        physics: 92,
        chemistry: 90,
        philosophy: 95
    },
    isActive: true,
    gerFullName: () => {
        return this.firstName + " " + this.lastName;
    },
    getAverageGrade: () => {
        let average = 0;
        const gradesList = this.grads.values();
        for (const grade of gradesList) {
            average += grade / gradesList.length;
        }

        return average;
    }
};

console.log(`Доступ до властивостей об'єкту studentProfile з точковою нотацією = ${studentProfile.lastName}`);
console.log(`Доступ до властивостей об'єкту studentProfile з точковою нотацією = ${studentProfile["lastName"]}`);

console.log("Демонстрація дитамічного ключа, вивід значень кожної другої властивості");
const keys = Object.keys(studentProfile);
for (let i = 0; i < keys.length; i+=2) {
    console.log(studentProfile[keys[i]]);
}

// 3. Виконайте ітерацію за допомогою Object.keys() , Object.values() та Object.entries() . Виведіть результати.

console.log("Виконання ітерації за допомогою Object.keys()")
for (const key of keys) {
    console.log(key);
}

console.log("Виконання ітерації за допомогою Object.entries()")
const entries = Object.entries(studentProfile);
for (const entry of entries) {
    console.log(entry);
}

// 4. Створіть копію обʼєкта за допомогою spread-оператора ( ... ) та змініть у копії одне поле. Переконайтеся, що оригінал не змінився.

const studentProfileCopy  = {...studentProfile};
studentProfileCopy.firstName = "Валерій";
console.log(`Оригінальний об'єкт = ${JSON.stringify(studentProfile)}`);
console.log(`Змінена копія об'єкту = ${JSON.stringify(studentProfileCopy)}`);

// Продемонструйте optional chaining ( ?. )

console.log(`Демонстрація доступу до неіснуючої властивості з допомогою optional chaining studentProfile.specialty?.number = ${studentProfile.specialty?.number ?? "Не призначено"}`);