const numbersArray = [10, 20, 30, 40, 50]
const sumArray = numbersArray.reduce((acc, cur) => acc + cur, 0)
console.log('sumArray=', sumArray)