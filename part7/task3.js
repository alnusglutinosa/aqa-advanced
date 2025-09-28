function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Аргументи не числа!')
  }

  if (denominator === 0) {
    throw new Error('Ділення на нуль!')
  }

  return numerator / denominator
}

  try {
    const result = divide(10, 2)
    console.log(`Результат= ${result}`)
  } catch (error) {
    console.error(`Помилка: ${error.message}`)
  } finally {
    console.log('Робота завершена')
  }

  try {
    const result = divide(10, 'aaa')
    console.log(`Результат= ${result}`)
  } catch (error) {
    console.error(`Помилка: ${error.message}`)
  } finally {
    console.log('Робота завершена')
  }

   try {
    const result = divide(10, 0)
    console.log(`Результат= ${result}`)
  } catch (error) {
    console.error(`Помилка: ${error.message}`)
  } finally {
    console.log('Робота завершена')
  }