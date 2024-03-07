class Book{
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI{
  AddBookToList(book)
{
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#", class = "delete">X<a></td>`;
    list.appendChild(row);
}
  
  showalert(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.alert').remove();
      },3000);}
  
  deletebook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }
  ClearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}
class Store{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks(){
    const books = Store.getBooks();
    books.forEach(function(book){
      const ui = new UI;
      ui.AddBookToList(book);
    });
  }
  static addBook(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }
  static removeBook(isbn){
    const books = Store.getBooks();
    books.forEach(function(book,index){
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books',JSON.stringify(books));
  }
}
document.addEventListener('DOMContentLoaded', Store.displayBooks);
document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const book = new Book(title,author,isbn);
  const ui = new UI();
  if (title === '' || author === '' || isbn === ''){
    ui.showalert('Please fill in all the values', 'error');
  } else{
    ui.AddBookToList(book);
    Store.addBook(book);
    ui.showalert('book added', 'success');
    ui.ClearFields();
  }
})
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  if(e.target.className === 'delete'){
    ui.deletebook(e.target);
    ui.showalert('Book Removed','success');
  }
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  e.preventDefault();
})