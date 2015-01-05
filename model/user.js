/**
 * Created by HenryCui on 15-1-3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username:{type:String,index:true},
    email:{type:String},
    password:{type:String},
    actived:{type:Boolean},
    user_info:{
        age:{type:String},
        birthdaty:{type:Date}
    },
    create_date:{type:Date,default:Date.now}
});

UserSchema.index({username:1},{unique:true});
UserSchema.index({email:1},{unique:true});
mongoose.model('user',UserSchema);