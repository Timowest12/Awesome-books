let books = [];
const addBtn = document.getElementById("add-new-book")
const booksoutput = document.querySelector('#booksoutput')
function outputbooklist(){
  booksoutput.innerHTML = "";
  books.forEach((book, index) => {
    
    booksoutput.innerHTML += `<div><div>${book.title}</div><div>${book.author}</div><button onclick='removefromlist(${index})'>remove</button></div`;
  })
  
} 
function removefromlist(index){
  books.splice(index,1)
  outputbooklist()
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
