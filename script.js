/* initialize variables */
const myLibrary = [];
const addButton = document.querySelector("#addButton");
const closeButton = document.querySelector("#closeButton");
const submitButton = document.querySelector("#submitButton");
const bookFormCont = document.querySelector("#bookForm");
const bookContainer = document.querySelector("#libraryDiv");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const dialogForm = document.querySelector("#dialogForm");


/* initialize the book constructor */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.uuid = crypto.randomUUID();
}

/* Functions */
/* Displays the book cards  */
let displayCards = () => {
  bookContainer.innerHTML = myLibrary
    .map(
      (book) =>
        `<div>
            <h4 class='bookTitle'>Title: ${book.title}</h4>
            <h4>Author: ${book.author}</h4>
            <h4>Pages: ${book.pages}</h4>
            <h4>Read: ${book.read}</h4>
            <button id='${book.uuid}' class='deleteButtons'>Delete</button>
        </div>`
    )
    .join("");
  deleteBook();
};
/* add books to library */
let addBook = (title, author, pages, read) => {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
};
/* removes book from library */
let removeBook = (arr, id) => {
  const objIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objIdIndex, 1);
  return arr;
};
/* calls removeBook to each delete button pressed */
let deleteBook = () => {
  const deleteButtons = document.querySelectorAll(".deleteButtons");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      removeBook(myLibrary, button.id);
      displayCards();
    });
  });
};

/* Event Listeners */
addButton.addEventListener("click", () => {
  dialogForm.showModal();
});
closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialogForm.close();
});
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let bTitle = titleInput.value;
  let bAuthor = authorInput.value;
  let bPages = pagesInput.value;
  let bRead = readInput.checked;
  addBook(bTitle, bAuthor, bPages, bRead);
  /* input reset */
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
  /* make hidden */
  displayCards();
  dialogForm.close()
});

/* initializes the page */
addBook("The Hunger Games", "Suzanne Collins", "374", true);
displayCards();
