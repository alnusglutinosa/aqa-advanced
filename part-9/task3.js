const car1 = {
  brand: 'Skoda',
  model: 'Octavia',
  year: 2015,
}

const car2 = {
  brand: 'Hyundai',
  model: 'Solaris',
  owner: 'Ольга Шевченко'
}

const car3 = { ...car1, ...car2 }

console.log(car3)
