// the showalert code
// UI.prototype.showalert() = function(message, className){
//   const div = document.createElement('div');
//   div.className = `alert ${className}`;
//   div.appendChild(document.createTextNode(message));
//   const container = document.querySelector('.container');
//   const form = document.querySelector('#book-form');
//   container.insertBefore(div, form);
//   setTimeout(function(){
//     document.querySelector('.alert').remove();
//   },3000);
// }

// Entire code for add book to list
// function Book(title, author, isbn){
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
// }
// function  UI(){}
// UI.prototype.AddBookToList = function(book){
//   const list = document.getElementById('book-list');
//   const row = document.createElement('tr');
//   row.innerHTML = `
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.isbn}</td>
//   <td><a href = "#", class = "delete">X<a></td>`;
//   list.appendChild(row);
// }
// UI.prototype.ClearFields = function(){
//   document.getElementById('title').value = '';
//   document.getElementById('author').value = '';
//   document.getElementById('isbn').value = '';
// }    
// document.getElementById('book-form').addEventListener('submit', function(e){
//   e.preventDefault();
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('author').value;
//   const isbn = document.getElementById('isbn').value;
//   const book = new Book(title,author,isbn);
//   const ui = new UI();
//   ui.AddBookToList(book);
//   ui.ClearFields();
// })


