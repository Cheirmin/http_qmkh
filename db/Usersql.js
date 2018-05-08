var UserSQL = {
  insert: 'INSERT INTO t_users_info(user_id,username,password) VALUES(?,?,?)',
  queryAll: 'SELECT * FROM t_users_info',
  getUserById: 'SELECT * FROM t_users_info WHERE user_id = ? ',
};
module.exports = UserSQL;
