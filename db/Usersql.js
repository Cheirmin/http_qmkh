var UserSQL = {
  insert: 'INSERT INTO t_users_info(user_id,user_name,password,email) VALUES(?,?,?,?)',
  queryAll: 'SELECT * FROM t_users_info',
  getUserById: 'SELECT * FROM t_users_info WHERE user_id = ? ',
  getPwdById: 'SELECT password FROM t_users_info WHERE user_id = ? ',
};

module.exports = UserSQL;
