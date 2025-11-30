// Book class
class Book {
    constructor(title, author, isbn, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }

    // Method to toggle book availability
    toggleStatus() {
        this.isAvailable = !this.isAvailable;
    }
}

// Creating 3 book objects
const book1 = new Book("The Alchemist", "Paulo Coelho", "1111");
const book2 = new Book("Harry Potter", "J.K. Rowling", "2222", false);
const book3 = new Book("Atomic Habits", "James Clear", "3333");

// Storing in array
const books = [book1, book2, book3];

// Converting array to JSON
const booksJSON = JSON.stringify(books, null, 2);
console.log("Books JSON:");
console.log(booksJSON);

// Creating historyBook using Object.create()
const historyBook = Object.create(Book.prototype);
historyBook.title = "History of India";
historyBook.author = "Unknown";
historyBook.isbn = "4444";
historyBook.isAvailable = true;

// Borrow simulation
function borrowBook(book) {
    if (book.isAvailable) {
        book.toggleStatus();
        console.log(`Book issued: ${book.title}`);
    } else {
        console.log(`Not available: ${book.title}`);
    }
}

// Testing borrow system
borrowBook(book1);
borrowBook(book2);
borrowBook(historyBook);
