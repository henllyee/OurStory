/**
 * Created by HenryCui on 15-1-3.
 */
var mongoose = reqiure('mongoose');
var Scehma = mongoose.Schema;
var user = new Schema({
    user_name:{type:String,index:true},
    email:{type:String},
    password:{type:String},
    actived:{type:Boolean},
    user_info:{
        age:{type:String},
        birthdaty:{type:Date}
    },
    create_date:{type:Date}
});
mongoose.model('user',user);