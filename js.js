class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  addtolist() { 
    if (localStorage.getItem("books") === null) {
      var booklist = [];
    }else{
      booklist = JSON.parse(localStorage.getItem('books'));
    }
    booklist.push(this)
    localStorage.setItem('books', JSON.stringify(booklist));
    outputbooklist();
    
   }
   removefromlist(index){
    var bookss = JSON.parse(localStorage.getItem('books'));
    bookss.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookss));
    outputbooklist();
   }
}
const addBtn = document.getElementById('add-new-book');
const booksoutput = document.querySelector('#booksoutput');

function outputbooklist() {
  booklistoutp = JSON.parse(localStorage.getItem('books'));
  booksoutput.innerHTML = '';
  booklistoutp.forEach((book, index) => {
    booksoutput.innerHTML += `<div class = "addedbook"><p>${book.title}</p><p>${book.author}</p><button onclick='removefromlist(${index})'>Remove</button></div`;
  });
}

function removefromlist(index) {
  let newBook = new Book(title,author).removefromlist(index);
}

const addBooks = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title.trim() === '' || author.trim() === '') {
    return;
  }

  let newBook = new Book(title,author).addtolist();
  outputbooklist();
};

addBtn.addEventListener('click', addBooks);
removefromlist(0);
