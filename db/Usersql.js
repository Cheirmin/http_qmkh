var UserSQL = {
  insert: 'INSERT INTO users(id,username) VALUES(?,?)',
  queryAll: 'SELECT * FROM users',
  getUserById: 'SELECT * FROM users WHERE id = ? ',
};
module.exports = UserSQL;
