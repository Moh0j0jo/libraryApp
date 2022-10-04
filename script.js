let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
        myLibrary.push(book);
}

function loopLibrary(){
    //loop trough library and display to the page in cards.
}

function createCards(){
    //create X peace of Cards to display X peace of books with info.
    const books = document.querySelector(".books");

    //loop iver the library array and display to the cards
    myLibrary.forEach(myLibrary =>{
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for ( let key in myLibrary){
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

//use Dummy data for generating inputs
addBookToLibrary("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read yet")
addBookToLibrary("The Honulu", "by Reed Richards", "200 pages", "not read yet")
addBookToLibrary("The Kutulu", "by Freddy Kruger", "134 pages", "not read yet")
addBookToLibrary("The Abrakadabra", "by IDK Peter", "431 pages", "Read")
addBookToLibrary("The Book", "by Jhon Doe", "123 pages", "not read yet")
addBookToLibrary("The CookBook", "by Not Tolkien", "333 pages", "Read")
console.log("end of code array contents", myLibrary);

/* const theHobbit = new Book("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read yet") */

createCards();