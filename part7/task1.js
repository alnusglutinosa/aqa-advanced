function handleEven() {
  console.log('number is even')
}

function handleOdd() {
  console.log('number is odd')
}

// main function
function handleNum(num, onEven, onOdd) {
  if (num % 2 === 0) {
    onEven()
  } else {
    onOdd()
  }
}

handleNum(2, handleEven, handleOdd)
handleNum(5, handleEven, handleOdd)