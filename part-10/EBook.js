import Book from './Book.js'

export default class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year)
    this._fileFormat = fileFormat
  }

  get fileFormat() {
    return this._fileFormat
  }

  set fileFormat(newVal) {
    if (!newVal || newVal.trim().length <= 1) {
      console.error('Введи більше 1 символа у fileFormat!')
      return
    }

    this._fileFormat = newVal
  }

  printInfo() {
    console.log('name=', this._name)
    console.log('author=', this._author)
    console.log('year=', this._year)
    console.log('fileFormat=', this._fileFormat)
  }

  static makeEbook(book, format) {
    return new EBook(book.name, book.author, book.year, format)
  }
}