function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

const allBooks = [];

function addNewBook(title, author, pages, readStatus) {
    const bookAddition = new Book(title, author, pages, readStatus);
    allBooks.push(bookAddition);
}
