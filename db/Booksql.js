var BookSQL = {
  insert: 'INSERT INTO t_books_info(book_id,book_name,book_summary,kind_id) VALUES(?,?,?,?)',
  queryAll: 'SELECT * FROM t_books_info',
  getBookById: 'SELECT * FROM t_books_info WHERE book_id = ? ',
  deleteBookById: 'DELETE FROM t_books_info WHERE book_id = ? ',
};

module.exports = BookSQL;
