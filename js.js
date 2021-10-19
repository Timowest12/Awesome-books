//localStorage.setItem('books', '[]');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  addtolist() { 
    //outputbooklist();
    if (localStorage.getItem("books") === null) {
      var booklist = [];
      //alert('yoo')
    }else{
     // alert('too')
      booklist = JSON.parse(localStorage.getItem('books'));
    }
    booklist.push(this)
    //alert(booklist)
    localStorage.setItem('books', JSON.stringify(booklist));
    outputbooklist();
    
   }
}
const books = [];
const addBtn = document.getElementById('add-new-book');
const booksoutput = document.querySelector('#booksoutput');

/* function outputbooklist() {
  booklistoutp = JSON.parse(localStorage.getItem('books'));
  booksoutput.innerHTML = '';
  booklistoutp.forEach((book, index) => {
    booksoutput.innerHTML += `<div class = "addedbook"><p>${book.title}</p><p>${book.author}</p><button onclick='removefromlist(${index})'>Remove</button></div`;
  });
} */

function removefromlist(index) {
  const booklist = JSON.parse(localStorage.getItem('books'));
  booklist.splice(index, 1);
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(booklist));
  outputbooklist();
}

const addBooks = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title.trim() === '' || author.trim() === '') {
    return;
  }

  let newBook = new Book(title,author).addtolist();

  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  outputbooklist();
};

addBtn.addEventListener('click', addBooks);
removefromlist(0);
