const apiUrl = '/books';

function fetchBooks() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(books => {
      const tbody = document.querySelector('#booksTable tbody');
      tbody.innerHTML = '';
      books.forEach(book => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><input value="${book.title}" data-id="${book._id}" class="edit-title" /></td>
          <td><input value="${book.author}" data-id="${book._id}" class="edit-author" /></td>
          <td><input value="${book.year}" data-id="${book._id}" class="edit-year" type="number" /></td>
          <td>
            <button class="action-btn edit-btn" onclick="updateBook('${book._id}')">Update</button>
            <button class="action-btn delete-btn" onclick="deleteBook('${book._id}')">Delete</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    });
}

document.getElementById('addBookForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author, year })
  })
    .then(res => res.json())
    .then(() => {
      fetchBooks();
      this.reset();
    });
});

window.updateBook = function(id) {
  const title = document.querySelector(`.edit-title[data-id='${id}']`).value;
  const author = document.querySelector(`.edit-author[data-id='${id}']`).value;
  const year = document.querySelector(`.edit-year[data-id='${id}']`).value;
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author, year })
  })
    .then(res => res.json())
    .then(() => fetchBooks());
};

window.deleteBook = function(id) {
  fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(() => fetchBooks());
};

fetchBooks();
