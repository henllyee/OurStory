/**
 * Created by hengliang.cui on 2015/1/5.
 */
var User = require('../model').User;

/**
 * 注册用户
 * Callback:
 * - err, 数据库异常
 * @param {String} email 邮箱
 * @param {String} password 密码
 * @param {Function} callback 回调函数
 */
exports.register=function(email,password,callback){
    var user = new User();
    user.email = email;
    user.password = password;
    user.save(callback);
};

/**
 * 查询用户
 * Callback:
 * - err, 数据库异常
 * - data,用户对象
 * @param {String} email 邮箱
 * @param {Function} callback 回调函数
 */
exports.findByEmail=function(email,callback){
    User.findOne({email:email},callback);
}