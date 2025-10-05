import Book from './Book.js'
import EBook from './EBook.js'

const book_1 = new Book('name 1', 'author 1', 1000)
const book_2 = new Book('name 2', 'author 2', 999)
const ebook_1 = new EBook('e-name 1', 'e-author 1', 2002, 'DjVu')
const ebook_2 = new EBook('e-name 2', 'e-author 2', 2003, 'FB2')


book_1.printInfo()
book_2.printInfo()
ebook_1.printInfo()
ebook_2.printInfo()

// 4
const res = Book.findOldBook([book_1, book_2, ebook_1, ebook_2])
console.log('findOldBook=', res)

// 5
const newEbook = EBook.makeEbook(book_1, 'pdf')
newEbook.printInfo()