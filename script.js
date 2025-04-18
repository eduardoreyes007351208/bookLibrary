/* initialize variables */
const myLibrary = [];
const addButton = document.querySelector('#addButton')
const closeButton = document.querySelector('#closeButton')
const submitButton = document.querySelector('#submitButton')
const bookFormCont = document.querySelector('#bookForm')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const readInput = document.querySelector('#read')


/* initialize the book constructor */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uuid = crypto.randomUUID()
}


let addBook = (title, author, pages, read) => {
    console.log(title, author, pages, read)
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    console.log(myLibrary)
}
addButton.addEventListener('click', (event) => {
    event.preventDefault()
    bookFormCont.style.visibility = 'visible';
})
closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    bookFormCont.style.visibility = 'hidden';
})
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    let bTitle = titleInput.value;
    let bAuthor = authorInput.value;
    let bPages = pagesInput.value;
    let bRead = readInput.checked;
    addBook(bTitle, bAuthor, bPages, bRead)
    /* input reset */
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
    /* make hidden */
    bookFormCont.style.visibility = 'hidden';
})