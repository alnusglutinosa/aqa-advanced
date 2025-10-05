export default class Book {
  constructor(name, author, year) {
    this._name = name
    this._author = author
    this._year = year
  }

  get name() {
    return this._name
  }

  set name(newVal) {
    if (!newVal || newVal.trim().length <= 3) {
      console.error('Введи більше 3 символів у name!')
      return
    }

    this._name = newVal
  }

  get author() {
    return this._author
  }

  set author(newVal) {
    if (!newVal || newVal.trim().length <= 3) {
      console.error('Введи більше 3 символів у author!')
      return
    }

    this._author= newVal
  }

  get year() {
    return this._year
  }

  set year(newVal) {
    if (!newVal) {
      console.error('Введи year!')
      return
    }

    this._year= newVal
  }

  printInfo() {
    console.log('name=', this._name)
    console.log('author=', this._author)
    console.log('year=', this._year)
  }

  static findOldBook(books) {
    return books.reduce((acc, book) => {
        return book.year < acc.year ? book : acc
    })
  }
}


