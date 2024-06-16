document.addEventListener('DOMContentLoaded', () => {
  const featuredList = document.getElementById('featured-list');
  const searchInput = document.getElementById('search-input');
  const addBookBtn = document.getElementById('add-book-btn');
  const removeBookBtn = document.getElementById('remove-book-btn');
  const searchButton = document.getElementById('search-button');

  // Function to add a new book
  const addBook = () => {
    // Prompt user for book image URL
    const bookUrl = prompt('Enter the URL of the book image:');
    if (!bookUrl) return; // Return if user cancels or leaves it empty

    // Create new book element
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.innerHTML = `
      <img src="${bookUrl}" alt="New Book" class="book__img">
      <h3 class="book__title">New Book</h3>
      <i class="ri-heart-line favorite-btn"></i>
    `;
    featuredList.appendChild(newBook);
  };

  // Function to remove the last book
  const removeBook = () => {
    const lastBook = featuredList.lastElementChild;
    if (lastBook) {
      featuredList.removeChild(lastBook);
    }
  };

  // Function to search books based on input value
  const searchBooks = () => {
    const searchValue = searchInput.value.toLowerCase();
    const books = featuredList.querySelectorAll('.book');
    books.forEach(book => {
      const title = book.querySelector('.book__title').textContent.toLowerCase();
      if (title.includes(searchValue)) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  };

  // Event listener for adding a new book
  addBookBtn.addEventListener('click', addBook);

  // Event listener for removing the last book
  removeBookBtn.addEventListener('click', removeBook);

  // Event listener for search button
  searchButton.addEventListener('click', searchBooks);

  // Event listener for input change in search
  searchInput.addEventListener('input', searchBooks);

  // Event listener for favorite button toggling
  featuredList.addEventListener('click', (e) => {
    if (e.target.classList.contains('favorite-btn')) {
      e.target.classList.toggle('ri-heart-line');
      e.target.classList.toggle('ri-heart-fill');
    }
  });
});
