/**
 * Created by hengliang.cui on 2015/1/5.
 */
var collectionProxy = require('../../proxy').Collection;
var userProxy = require('../../proxy').User;
var should = require('should');
var ObjectId = require('mongoose').Schema.ObjectId;

describe('collection proxy',function(){
    describe('newAndSave method',function(){
        it('should add success',function(done){
            userProxy.findByEmail('jack@126.com',function(err,data){
                collectionProxy.newAndSave('这是两个二货的故事',
                    '<p>故事很简单、很普通，希望他们一直把这个故事写下去，cifdd站点永不关闭。</p>',
                    data._id,'./img/my/1.jpg','About us',function(err){
                        should(err).not.be.ok;
                        done();
                    })
            });
        })
    })
});


describe('collection proxy',function(){
    describe('addStory',function(){
        it('should add success',function(done){
            var collectionId = '54ab45d03c4ad9d3011802fc';
            collectionProxy.addStory(collectionId,'一个去厦门，一个在上海',
                '<p>这一天，IT男井先生只身漂泊到福建，福建的房二货跟随父母留在上海。</p>',
                '就像一条平行线永远不会有交集','August 19, 2012','August 20, 2012','./img/my/1.jpg',
                '厦门、上海，有一天会有交集吗','',function(err){
                    should(err).not.be.ok;
                    done();
                });
        });
    });
});
