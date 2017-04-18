var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 注册检验
 */

router.post('/register',function (req,res,next) {
  console.log(req.body);
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'theend'
  });

  connection.connect();
    /**
     * 缺少判断该账号是否已经存在。
     */

    /**
     * 在创建时同时初始化账号积分
     */
    connection.query('insert into user values ("'+req.body.userId+'","'+req.body.userName+'","'+req.body.password+'","'+req.body.sex+'",'+'"这个人很懒，什么都没有留下","0"'+')', function (error, results, fields) {
    if (error) {
        throw error;
        res.send({returnCode:-1,returnVal:error});
    }
      else {
        res.send({returnVal: '注册成功', returnCode: 0});
    }
  });

  connection.end();
  //res.send({returnVal:'注册成功',returnCode:0});
});


/**
 * 登录检验
 */
router.post('/signIn',function (req,res,next) {
        console.log(req.body);
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'theend'
    });

    connection.connect();

    connection.query('select * from user where userName="'+req.body.userName+'"&&password="'+req.body.password+'"', function (error, results, fields) {
        console.log(results);

        if (error) {
            throw error;
            res.send({returnCode:-2,returnVal:error});
        }
        else {
            if(results.length) {
                res.send({returnVal:{ message:'登陆成功！',results:results}, returnCode: 0});
            }
            else{
                res.send({returnVal:'用户名或密码错误',returnCode:-1})
            }
        }
    });

    connection.end();
});
/**
 * 修改信息
 */
router.post('/changeUser',function (req,res,next) {
    console.log(req.body);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database : 'theend'
    });

    connection.connect();

    connection.query('update user set userName=?,password=?,sex=?,remark=?,grade=? where userId=?',
        [req.body.userName, req.body.password, req.body.sex, req.body.remark, req.body.grade,req.body.userId], function (error, results, fields) {
            console.log(results);

            if (error) {
                throw error;
                res.send({returnCode: -2, returnVal: error});
            }
            else {
                res.send({returnCode:0,returnVal:{message:results.message,user:req.body}});
            }
        })

});
   /**
    * 积分增减
    * @type {[type]}
    */
   router.post('/changeGrade',function(req,res,next){
     console.log(req.body);
     var connection = mysql.createConnection({
         host: 'localhost',
         user: 'root',
         database : 'theend'
     });

     connection.connect();

     connection.query('update user set userName=?,password=?,sex=?,remark=?,grade=? where userId=?',
         [req.body.userName, req.body.password, req.body.sex, req.body.remark, req.body.grade,req.body.userId], function (error, results, fields) {
             console.log(results);

             if (error) {
                 throw error;
                 res.send({returnCode: -2, returnVal: error});
             }
             else {
                 res.send({returnCode:0,returnVal:{message:results.message,user:req.body}});
             }
         })
   });


   router.post('/getRanking',function(req,res,next) {
     var connection = mysql.createConnection({
         host: 'localhost',
         user: 'root',
         database : 'theend'
     });

     connection.connect();

     connection.query('select * from user', function (error, results, fields) {
             console.log(results);
             for(var i=0;i<results.length;i++){
               for(var v=i+1;v<results.length;v++){
                 if(results[i].grade<=results[v].grade){
                   var c=results[i];
                   results[i]=results[v];
                   results[v]=c;
                 }
               }
             }
             if (error) {
                 throw error;
                 res.send({returnCode: -2, returnVal: error});
             }
             else {
                 res.send({returnCode:0,returnVal:{message:results}});
             }
         })

   })
module.exports = router;
