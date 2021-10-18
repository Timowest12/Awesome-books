let books = [];
const addBtn = document.getElementById("add-new-book")
const booksoutput = document.querySelector('#booksoutput')
function outputbooklist(){
  booksoutput.innerHTML = "";
  books.forEach((book) => {
    
    booksoutput.innerHTML += `<div><div>${book.title}</div><div>${book.author}</div></div`;
  })
  
} 


const addBooks = () =>{
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value

  if (title.trim() === "" || author.trim() === "" ){
    return
  }
  const newBook = {
    title,
    author 
  }
  books.push(newBook)
  console.log(newBook)
  outputbooklist()
}


addBtn.addEventListener("click", addBooks)
console.log(books)
