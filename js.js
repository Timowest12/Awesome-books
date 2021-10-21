const addBtn = document.getElementById('add-new-book');
const bttnn = document.getElementById('addbuttom');
const booksoutput = document.querySelector('#booksoutput');
const listbtn = document.querySelector('.list');
const addnew = document.querySelector('.addnew');
const contact = document.querySelector('.contact');

const outputsectiondiv = document.querySelector('.outputsection');
const inputsectiondiv = document.querySelector('.inputsection');
const contactdiv = document.querySelector('.contactsection');

function list(){
  contactdiv.classList.add('notvisible');
  inputsectiondiv.classList.add('notvisible');
  outputsectiondiv.classList.remove('notvisible');
}
list()
function addneww(){
  contactdiv.classList.add('notvisible');
  inputsectiondiv.classList.remove('notvisible');
  outputsectiondiv.classList.add('notvisible');
}
function contactt(){
  contactdiv.classList.remove('notvisible');
  inputsectiondiv.classList.add('notvisible');
  outputsectiondiv.classList.add('notvisible');
}

listbtn.addEventListener('click', list);
addnew.addEventListener('click', addneww);
contact.addEventListener('click', contactt);

function outputbooklist() {
  const booklistoutp = JSON.parse(localStorage.getItem('books'));
  booksoutput.innerHTML = '';
  booklistoutp.forEach((book, index) => {
    booksoutput.innerHTML += `<div class = "addedbook"><div class='innerdata'><p>'${book.title}'&nbsp;by:&nbsp;</p><p>${book.author}</p></div><button onclick='removefromlist(${index})'>Remove</button></div`;
  });
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addtolist() {
    let booklist = [];
    if (localStorage.getItem('books') === null) {
      booklist = [];
    } else {
      booklist = JSON.parse(localStorage.getItem('books'));
    }
    booklist.push(this);
    localStorage.setItem('books', JSON.stringify(booklist));
    outputbooklist();
  }

  removefromlist(index) {
    const bookss = JSON.parse(localStorage.getItem('books'));
    bookss.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookss));
    outputbooklist(this);
  }
}

const addBooks = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title.trim() === '' || author.trim() === '') {
    return;
  }

  const newBook = new Book(title, author).addtolist();
  bttnn.addEventListener('click', newBook);
  outputbooklist();
};
function removefromlist(index) {
  const newBook = new Book().removefromlist(index);
  bttnn.addEventListener('click', newBook);
}

addBtn.addEventListener('click', addBooks);

removefromlist(100);
