// Завдання 2
// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
const endpointTodo = 'https://jsonplaceholder.typicode.com/todos/1'
const endpointUser = 'https://jsonplaceholder.typicode.com/users/1'

function fetchTodo() {
  return fetch(endpointTodo)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetchTodo')
      }

      return response.json()
    })
}

function fetchUser() {
  return fetch(endpointUser)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetchUser')
      }

      return response.json()
    })
}

Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('-----Promise.all:')
    console.log('Todo:', todo)
    console.log('User:', user)
  })
  .catch(error => {
    console.error(error)
  })


  Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log('-----Promise.race:', result)
  })
  .catch(error => {
    console.error(error)
  })