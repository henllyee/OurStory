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

/**
 * 新增story
 * Callback:
 * - err 数据库异常
 * @param {ObjectId} collectionId 集合id
 * @param {String} title 标题
 * @param {String} tag 标签
 * @param {String} startdate 开始时间
 * @param {String} enddata 结束时间
 * @param {String} media 图片地址
 * @param {String} caption 图片描述
 * @param {String} thumbnail 小图片地址
 * @param {Function} callback 回调函数
 */
exports.addStory=function(collectionId,title,text,tag,startdate,enddate,media,caption,thumbnail,callback){
    Collection.findById(collectionId,function(err,data){
        if(err){
            callback(err);
            return;
        }
        data.date.push({
            title:title,
            text:text,
            tag:tag,
            startdate:startdate,
            enddate:enddate,
            asset:{
                media:media,
                caption:caption,
                thumbnail:thumbnail
            }
        });
        data.save(callback);
    });
}