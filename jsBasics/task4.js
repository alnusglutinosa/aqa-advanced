// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const radius = 10
const area = Math.PI * radius ** 2
console.log('Завдання 4.1')
console.log('  Радіус=', radius.toFixed(2))
console.log('  Площа кола=', area.toFixed(2))

// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

const length = 100
const width = 5
const rectangleArea = length * width
console.log('Завдання 4.2')
console.log('  Площа прямокутника=', rectangleArea.toFixed(2))

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.

const cylinderRadius = 4
const height = 10
const cylinderVolume = Math.PI * cylinderRadius ** 2 * height
console.log('Завдання 4.3')
console.log('  Обʼєм циліндра=', cylinderVolume.toFixed(2))