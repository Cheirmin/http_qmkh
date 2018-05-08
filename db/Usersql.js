var UserSQL = {
  insert: 'INSERT INTO users(user_id,username,password) VALUES(?,?,?)',
  queryAll: 'SELECT * FROM users',
  getUserById: 'SELECT * FROM users WHERE user_id = ? ',
};
module.exports = UserSQL;
