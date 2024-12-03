const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if (read) { //Skipped the '== true' as it the default if statement is true
            return `${title} by ${author}, ${pages} pages, finished reading`;
        }
        else {
            return `${title} by ${author}, ${pages} pages, not read yet`;
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    // do stuff here
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Holy Bible', 'Jesus Christ', 3000, true);

console.log(myLibrary);

console.log(myLibrary[1].info());