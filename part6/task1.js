function calcRectangleAreaWidthFunctionDeclaration(width, height) {
  return width * height
}

const calcRectangleAreaWidthFunctionExpression = function(width, height) {
  return width * height
}

const calcRectangleAreaWidthFunctionArrow = (width, height) => width * height

console.log('Function Declaration=', calcRectangleAreaWidthFunctionDeclaration(5, 10))
console.log('Function Expression=', calcRectangleAreaWidthFunctionExpression(5, 10))
console.log('Arrow Function=', calcRectangleAreaWidthFunctionArrow(5, 10))