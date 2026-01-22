// Самостоятельное задание №1: Работа с переменными
let adminName;
let userName;

userName = "Владимир";

adminName = userName;

alert(adminName);


// Самостоятельное задание №2: Понятные имена переменных
let planetName = "Земля";

let currentUserName = "Иван Петров";

let userRegistrationDate = "2023-10-15";

let userRole = "admin";

// примеры
console.log("Название планеты: "+ planetName);
console.log("Имя пользователя: "+ currentUserName);
console.log("Дата регистрации: "+ userRegistrationDate);
console.log("Роль пользователя: "+ userRole);


// Самостоятельное задание №3: Работа с объектами
let product = {
    name: "Смартфон",
    price: 29999
};

console.log("Название товара: "+ product.name);
console.log("Цена товара: "+ product.price);

// новое свойство category
product.category = "Электроника";

// Новая цена
product.price = 27999; 

// Выводим отдельные свойства с пояснениями
console.log("Детали товара:");
console.log("Название: "+ product.name);
console.log("Категория: "+ product.category);
console.log("Цена: "+ product.price + " рублей");


// Самостоятельное задание №4: Работа со сложными объектами
let student = {
    name: "Александр Иванов",
    age: 20,
    courses: ["Математика", "Физика", "История"],
    address: {
        city: "Москва",
        street: "Ленинский проспект",
        number: 15
    }
};

// добавляем новый курс "JavaScript"
student.courses.push("JavaScript");
console.log("После добавления курса 'JavaScript':");
console.log("Курсы: "+ student.courses);

// изменяем город проживания
student.address.city = "Санкт-Петербург";
console.log("После изменения города:");
console.log("Адрес: "+ student.address);

// удаляем первый курс из массива courses
let removedCourse = student.courses.shift(); // удаляет первый элемент
console.log("После удаления первого курса:");
console.log("Удален курс: "+ removedCourse);
console.log("Оставшиеся курсы: "+ student.courses);

// добавляем свойство grades
student.grades = {
    "Физика": 4,
    "История": 5,
    "JavaScript": 4
};
console.log("После добавления оценок: ");
console.log("Оценки: "+ student.grades);

//Выводим информацию о студенте
console.log(`Имя: ${student.name}`);
console.log(`Возраст: ${student.age} лет`);
console.log(`Адрес: г. ${student.address.city}, ул. ${student.address.street}, д. ${student.address.number}`);
console.log(`Количество курсов: ${student.courses.length}`);
console.log("Изучаемые курсы:");
student.courses.forEach((course, index) => {
    console.log(`  ${index + 1}. ${course}`);
});

console.log("Оценки:");
for (let course in student.grades) {
    console.log(`  ${course}: ${student.grades[course]}`);
}


// Самостоятельное задание №6: Создание функций
function greet(name) {
    return `Привет, ${name}!`;
}

// сложение двух чисел
function sum(a, b) {
    return a + b;
}

// проверка четности числа
function isEven(number) {
    return number % 2 === 0;
}

// вычисление площади прямоугольника
function calculateArea(width, height) {
    return width * height;
}

const greeting = greet("Анна");
console.log(`greet("Анна"): ${greeting}`);

const additionResult = sum(15, 27);
console.log(`sum(15, 27): ${additionResult}`);

const numberToCheck = 42;
const evenCheckResult = isEven(numberToCheck);
console.log(`isEven(${numberToCheck}): ${evenCheckResult}`);

const oddNumber = 17;
const oddCheckResult = isEven(oddNumber);
console.log(`isEven(${oddNumber}): ${oddCheckResult}`);

const rectangleWidth = 8;
const rectangleHeight = 5;
const areaResult = calculateArea(rectangleWidth, rectangleHeight);
console.log(`calculateArea(${rectangleWidth}, ${rectangleHeight}): ${areaResult}`);


// Самостоятельное задание №7: Функции и условные операторы
function checkAge(age) {
    if (age < 18) {
        return "Доступ запрещён: возраст меньше 18 лет.";
    } else if (age >= 18 && age <= 59) {
        return "Доступ разрешён: добро пожаловать!";
    } else {
        return "Доступ разрешён: добро пожаловать! Особые привилегии.";
    }
}

// определение скидки
function getDiscount(totalAmount) {
    if (totalAmount < 1000) {
        return 0;
    } else if (totalAmount >= 1000 && totalAmount <= 5000) {
        return 5;
    } else {
        return 10;
    }
}

// приветствие пользователя с учетом возраста
function greetUser(name, age) {
    const accessMessage = checkAge(age);
    return `Привет, ${name}! ${accessMessage}`;
}

// Примеры
console.log("Функция checkAge:");
console.log(`checkAge(15): "${checkAge(15)}"`);
console.log(`checkAge(25): "${checkAge(25)}"`);
console.log(`checkAge(65): "${checkAge(65)}"`);
console.log(`checkAge(18): "${checkAge(18)}"`);
console.log(`checkAge(59): "${checkAge(59)}"`);
console.log(`checkAge(60): "${checkAge(60)}"`);

// Примеры
console.log("Функция getDiscount:");
console.log(`getDiscount(500): ${getDiscount(500)}%`);
console.log(`getDiscount(1000): ${getDiscount(1000)}%`);
console.log(`getDiscount(2500): ${getDiscount(2500)}%`);
console.log(`getDiscount(5000): ${getDiscount(5000)}%`);
console.log(`getDiscount(7500): ${getDiscount(7500)}%`);
console.log(`getDiscount(10000): ${getDiscount(10000)}%`);

// Примеры
console.log("Функция greetUser:");
console.log(`greetUser("Анна", 25): "${greetUser("Анна", 25)}"`);
console.log(`greetUser("Иван", 16): "${greetUser("Иван", 16)}"`);
console.log(`greetUser("Ольга", 62): "${greetUser("Ольга", 62)}"`);
console.log(`greetUser("Петр", 18): "${greetUser("Петр", 18)}"`);
console.log(`greetUser("Мария", 59): "${greetUser("Мария", 59)}"`);

// Самостоятельное задание №1. Фильтрация чётных чисел из массива
function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Примеры
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(getEvenNumbers([10, 15, 20, 25]));
console.log(getEvenNumbers([-3, -2, -1, 0, 1, 2]));
console.log(getEvenNumbers([]));

// Самостоятельное задание №2. Вывод чисел от n до 1 с использованием цикла while
function countdownFromN(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        console.log('Ошибка: n должно быть положительным целым числом');
        return;
    }

    let i = n;

    while (i > 0) {
        console.log(i);
        i--;
    }
}

// Примеры
console.log('n = 5');
countdownFromN(5);

console.log('n = 3');
countdownFromN(3);

console.log('n = 1');
countdownFromN(1);

console.log('неверные значения');
countdownFromN(0);
countdownFromN(-5);
countdownFromN(3.14);
countdownFromN('5');

// Самостоятельное задание №3. Определение длины слов с использованием метода map
function getWordLengths(words) {
    return words.map(word => word.length);
}

// Примеры
console.log(getWordLengths(['Яблоко', 'Ананас', 'Черешня']));
console.log(getWordLengths(['JavaScript', 'Python', 'C++']));
console.log(getWordLengths(['']));
console.log(getWordLengths([]));

// Самостоятельное задание №4. Нумерация строк
function logNumberedStrings(strings) {
    strings.forEach((str, index) => {
        console.log(`${index + 1}. ${str}`);
    });
}

// Примеры
logNumberedStrings(['Яблоко', 'Банан', 'Апельсин']);

logNumberedStrings(['Первая строка', 'Вторая строка']);

// Самостоятельное задание №5. Поиск чисел больше заданного значения
function filterGreaterThan(arr, n) {
    return arr.filter(num => num > n);
}

// Примеры
console.log(filterGreaterThan([1, 4, 7, 12, 3, 9], 5));
console.log(filterGreaterThan([-3, 0, 8, 2], 0));
console.log(filterGreaterThan([], 10));

// Самостоятельное задание №1. Работа с контекстом объектов
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    
    // Метод getDescription возвращает описание автомобиля
    getDescription() {
        return `${this.brand} ${this.model}, выпущен в ${this.year} году.`;
    }
};

// Пример
console.log(car.getDescription());

// Проверяем, что метод использует текущие значения свойств объекта
car.year = 2030;
console.log(car.getDescription());

// Самостоятельное задание №2.1. Создание класса №2.2. Наследование классов №2.3. Методы
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} была написана ${this.author} в ${this.year} году`;
    }

    static compareAge(book1, book2) {
        if (book1.year < book2.year) {
            return `${book1.title} была издана раньше, чем ${book2.title}`;
        } else if (book1.year > book2.year) {
            return `${book2.title} была издана раньше, чем ${book1.title}`;
        } else {
            return `${book1.title} и ${book2.title} были изданы в одном году`;
        }
    }
}

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

    getSummary() {
        return `${this.title} была написана ${this.author} в ${this.month} ${this.year} года`;
    }
}

// Примеры
const book1 = new Book("Преступление и наказание", "Федор Достоевский", 1866);
console.log(book1.getSummary());

const magazine1 = new Magazine("National Geographic", "Various", 2023, "октябре");
console.log(magazine1.getSummary());

const book2 = new Book("Мастер и Маргарита", "Михаил Булгаков", 1967);
console.log(Book.compareAge(book1, book2));