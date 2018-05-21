var UserSQL = {
  insert: 'INSERT INTO t_users_info(user_id,user_name,password,email) VALUES(?,?,?,?)',
  queryAll: 'SELECT * FROM t_users_info',
  getUserById: 'SELECT * FROM t_users_info WHERE user_id = ? ',
  deleteUserById: 'DELETE FROM t_users_info WHERE user_id = ? ',
  updateUserById: 'UPDATE t_users_info SET  user_id =?,user_name=? ,email=? ,role_id=? WHERE user_id =?',
  lendBookById: 'UPDATE t_users_info SET  my_lend=? WHERE user_id =?',
  backBookById: 'UPDATE t_users_info SET  my_lend=null WHERE user_id =?',
};

module.exports = UserSQL;
