let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksOnPage();
}


function displayBooksOnPage() {
    const books = document.querySelector(".books");

    //Remove all prev displyd cards before loop over array again

    const removeDivs = document.querySelectorAll(".card");
    console.log("shw me the node count of current card divs....", removeDivs);
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    //Create a remove book button and class attribute for each array card
    let index = 0;

    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        // Create remove book button and add calss attribute for each array card
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.textContent = "";
   
        console.log("show me my current array object insude of foreach...", myLibrary);

        //Link the data attrivute of the remove button to the array and card
        removeBookButton.dataset.linkedArray = index;
        index++;
        console.log("show me the dataset link back to the array....", removeBookButton.dataset.linkedArray);
        card.appendChild(removeBookButton);

        //Start event listener/remove array item from array and card from parent div via data link

        removeBookButton.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary() {
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            console.log("attemtping to remove array item via data attribute....", parseint(retrieveBookToRemove));
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            card.remove();
            displayBooksOnPage();
        }

        //loop over the library array and display to the cards
        for (let key in myLibrarys) {
            console.log(`${key}: ${myLibrarys[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${myLibrarys[key]}`);
            card.appendChild(para);
        }
        })
 }

function displayTheForm() {
    document.getElementById("add-book-form").style.display = "";
}

function hideTheForm() {
    document.getElementById("add-book-form").style.display = "none";
}


function resetTheForm() {
    document.getElementById("add-book").reset();
}

function intakeFormData() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    addBookToLibrary(title, author, pages, read);

    resetTheForm();
}


//Event listeners

const addBookButton = document.querySelector(".add-book-button")
addBookButton.addEventListener("click", displayTheForm);

const submitButton = document.querySelector(".submit-btn")
submitButton.addEventListener("click", intakeFormData);

const resetButton = document.querySelector(".reset-btn")
resetButton.addEventListener("click", resetTheForm);


console.log("end of code array contents", myLibrary);

displayBooksOnPage();