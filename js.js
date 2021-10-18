let books = [];
const addBtn = document.getElementById("add-new-book")

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
}


window.addEventListener("click", addBooks)
console.log(books)
