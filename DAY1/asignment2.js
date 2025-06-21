const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    addBook(book) {
        if (!book.title || !book.author || !book.year) {
            console.log("Book information is incomplete. Please provide title, author, and year.");
            return;
        }
        this.books.push(book);
        console.log(`Book titled "${book.title}" added successfully.`);
    },

    // Method to find a book by title
    findBookByTitle(title) {
        const foundBook = this.books.find(book => book.title === title);
        if (foundBook) {
            console.log(` Found book: ${foundBook.title} by ${foundBook.author} (${foundBook.year})`);
            return foundBook;
        } else {
            console.log("Book not found.");
            return null;
        }
    },

    // Method to remove a book by title
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(` Book titled "${removedBook.title}" removed successfully.`);
        } else {
            console.log(" Book not found. Cannot remove.");
        }
    }
};

// Test Cases
library.addBook({ author: "George Orwell", year: 1949 }); 

library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log(` Total books in library: ${library.books.length}`);

library.findBookByTitle("1984"); 

library.removeBook("The Hobbit");

console.log(` Updated total books: ${library.books.length}`); //  print 1
console.log(library.books); // Final library state
 