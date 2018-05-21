var BookSQL = {
  insert: 'INSERT INTO t_books_info(book_id,book_name,book_summary,kind_id) VALUES(?,?,?,?)',
  queryAll: 'SELECT * FROM t_books_info',
  getBookById: 'SELECT * FROM t_books_info WHERE book_id = ? ',
  deleteBookById: 'DELETE FROM t_books_info WHERE book_id = ? ',
  lendBookById: 'UPDATE t_books_info SET lend_time =?, lend_id =? WHERE book_id =?',
  backBookById: 'UPDATE t_books_info SET lend_time =null, lend_id =null WHERE book_id =?',
};

module.exports = BookSQL;
