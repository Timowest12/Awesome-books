const books = [];
const addBtn = document.getElementById('add-new-book');
const booksoutput = document.querySelector('#booksoutput');

function outputbooklist() {
  const booklist = JSON.parse(localStorage.getItem('books'));
  booksoutput.innerHTML = '';
  booklist.forEach((book, index) => {
    booksoutput.innerHTML += `<div><div>${book.title}</div><div>${book.author}</div><button onclick='removefromlist(${index})'>remove</button></div`;
  });
}

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

  const newBook = {
    title,
    author,
  };

  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  outputbooklist();
};

addBtn.addEventListener('click', addBooks);
removefromlist(0);
