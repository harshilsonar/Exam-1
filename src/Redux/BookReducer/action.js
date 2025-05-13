export const getBooks = () => {
  // Write logic here
};

export const editBook = () => {
  // Write logic here
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
