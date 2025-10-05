const person = {
  firstName: 'Іван',
  lastName: 'Іваненко',
  age: 28,
}

person.email = 'test@test.com'
delete person.age
console.log(person)
