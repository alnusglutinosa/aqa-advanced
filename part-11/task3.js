// Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити
const endpointTodo = 'https://jsonplaceholder.typicode.com/todos/1'
const endpointUser = 'https://jsonplaceholder.typicode.com/users/1'

async function fetchTodoAsync() {
  const response = await fetch(endpointTodo)
  if (!response.ok) {
    throw new Error('fetchTodoAsync error')
  }
  return await response.json()
}

async function fetchUserAsync() {
  const response = await fetch(endpointUser)
  if (!response.ok) {
    throw new Error('fetchUserAsync error')
  }

  return await response.json()
}

Promise.all([fetchTodoAsync(), fetchUserAsync()])
  .then(([todo, user]) => {
    console.log('-----Async Promise.all:')
    console.log('Todo:', todo)
    console.log('User:', user)
  })
  .catch(error => {
    console.error(error)
  })


  Promise.race([fetchTodoAsync(), fetchUserAsync()])
  .then(result => {
    console.log('-----Async Promise.race:', result)
  })
  .catch(error => {
    console.error(error)
  })