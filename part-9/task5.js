// Масив об'єктів users
const users = [
  { name: 'Іван', email: 'email1@my.com', age: 20 },
  { name: 'Андрій', email: 'email2@my.com', age: 21 },
  { name: 'Ірина', email: 'email3@my.com', age: 22 }
]

for (const { name, email, age } of users) {
  console.log('name=', name)
  console.log('email=', email)
  console.log('age=', age)
}
