/**
 * Created by HenryCui on 15-1-3.
 */
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db_connect,function(err){
    if(err) {
        console.log('connect server: %s error.', config.db_connect);
        process.exit();
    }
});


require('./user');
require('./collection');
exports.User=mongoose.model('user');
exports.Collection = mongoose.model('collection');