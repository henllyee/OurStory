/**
 * Created by hengliang.cui on 2015/1/5.
 */
var proxy = require('../../proxy').User;
var should = require('should');

describe('user proxy',function(){
    describe('register methods',function(){
        it('should add success',function(done){
            proxy.register('jack@126.com','qmsjy',done);
        })
    })
});

/**
 *查询测试
 */
describe('user proxy',function(){
    describe('findByEmail method',function(){
        it('shoul query success',function(done){
            proxy.findByEmail('jack@126.com',function(err,data){
                //err.should.not.be.ok;
                should(err).not.be.ok;
                data.should.be.ok;
                data.should.have.property('password');
                should(data).have.property('password','qmsjy');
                done();
            })
        })
    })
})