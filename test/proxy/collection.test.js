/**
 * Created by hengliang.cui on 2015/1/5.
 */
var collectionProxy = require('../../proxy').Collection;
var userProxy = require('../../proxy').User;
var should = require('should');

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

        });
    });
});
