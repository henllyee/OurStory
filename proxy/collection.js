/**
 * Created by hengliang.cui on 2015/1/5.
 */
var Collection = require('../model').Collection;

/**
 * 新增collection
 * Callback:
 * - err 数据库异常
 * @param {String} title 邮箱
 * @param {String} text 描述
 * @param {ObjectId} userid 用户Id
 * @param {String} media 图片地址
 * @param {String} caption 图片描述
 * @param {Function} callback 回调函数
 */
exports.newAndSave=function(title,text,userid,media,caption,callback){
    var collection = new Collection();
    collection.title = title;
    collection.text = text;
    collection.owner = userid;
    collection.asset.media = media;
    collection.asset.caption = caption;
    collection.save(callback);
}

exports.addStory=function(title,text,tag,startdate,enddate,media,caption,thumbnail,callback){

}