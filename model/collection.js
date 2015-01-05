/**
 * Created by hengliang.cui on 2015/1/5.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CollectionSchema = new Schema({
    title:{type:String},
    text:{type:String},
    owner:{type:ObjectId},
    create_date:{type:Date,default:Date.now},
    update_date:{type:Date,default:Date.now},
    asset:{
        media:{type:String},
        caption:{type:String},
        thumbnail:{type:String}
    },
    date:[{
        startDate:{type:String},
        endDate:{type:String},
        title:{type:String},
        text:{type:String},
        tag:{type:String},
        create_date:{type:Date,default:Date.now},
        update_date:{type:Date,default:Date.now},
        asset:{
            media:{type:String},
            caption:{type:String},
            thumbnail:{type:String}
        }
    }]
});

mongoose.model('collection',CollectionSchema)

