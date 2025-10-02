function countRec(val) {
  if (val <= 0) {
    return
  }

  console.log(val)
  countRec(val - 1)
}

countRec(7)
