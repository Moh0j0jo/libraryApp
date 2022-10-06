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
        displayBooksOnPage();
}


function displayBooksOnPage(){
    const books = document.querySelector(".books");

    //Remove all prev displyd cards before loop over array again

    const removeDivs = document.querySelectorAll(".card");
    console.log("shw me the node count of current card divs....", removeDivs);
    for (let i=0; i<removeDivs.length; i++){
        removeDivs[i].remove();
    }



    //loop over the library array and display to the cards
    myLibrary.forEach(myLibrary =>{
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary){
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

function displayTheForm(){
    document.getElementById("add-book-form").style.display = "";
}

function hideTheForm(){
    document.getElementById("add-book-form").style.display = "none";
}


function resetTheForm(){
    document.getElementById("add-book").reset();
}

function intakeFormData(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    addBookToLibrary(title, author, pages, read);

    resetTheForm();
}


//Event listeners

const addBookButton = document.querySelector(".add-book-button")
    addBookButton.addEventListener("click",displayTheForm);
    
const submitButton = document.querySelector(".submit-btn")
    submitButton.addEventListener("click",intakeFormData);

const resetButton = document.querySelector(".reset-btn")
    resetButton.addEventListener("click",resetTheForm);


console.log("end of code array contents", myLibrary);

displayBooksOnPage();