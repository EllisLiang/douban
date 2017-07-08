var express = require('express');
var router = express.Router();
// 引入模块
var mysql = require('mysql');
// 配置设置
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'douban'

});



// 登录部分
router.post('/getdata',function(req,res){
	// console.log(req.body)
	// 把获取过来的信息进行比对
	connection.query('SELECT * FROM `data` WHERE username="'+req.body.username+'"',function(err,rows,f){
		if (err) {
			console.log(err);
		} else {
			console.log(rows.length);
			if(rows.length){
				// console.log(rows[0].password)
				if (rows[0].password==req.body.userpassword) {
					res.send({msg:'登录成功',tooken:1})
				} else {
					res.send('用户名或密码错误')
				}
			}else{
				res.send('用户名未注册')
			}
		}
	});
});

// 销毁tooken值
router.get('/tooken',function(req,res){
	res.send('0')
})

// 注册部分
router.post('/add',function(req,res){
	// 把获取过来的信息进行比对
	connection.query('SELECT * FROM `data` WHERE username="'+req.body.username+'"',function(err,rows,f){
		if (err) {
			console.log(err);
		} else {

			// console.log(rows.length);
			if(rows.length){
				res.send('用户用已存在');
			}else{
				connection.query('INSERT INTO `data`(`username`, `password`) VALUES (?,?)',[req.body.username,req.body.userpassword],function(err,rows,f){
					if (err) {
						console.log(err)
					} else {
						res.send('注册成功');
					}
				})
			}
		}
	});

	// console.log(addArr);
});
// 获取所有findmovie数据
router.get('/findmovie',function(req,res){

	connection.query('SELECT * FROM `findmovie`',function(err,rows,f){
		if (err) {
			console.log(err)
		} else {
			// console.log(rows);
			res.json(rows)
		}
	})
});
// 获取短评信息
router.get('/getcomment',function(req,res){
	connection.query('SELECT * FROM `comment`',function(err,rows,f){
		if (err) {
			console.log(err)
		} else {
			res.send(rows)
		}
	})
})
// 提价想看评论信息
router.post('/comment',function(req,res){
	// console.log(req.body.com)
	connection.query('INSERT INTO `douban`.`comment` (`text`) VALUES (?)',[req.body.com],function(err,rows,f){
		if (err) {
			console.log(err)
		} else {
			res.send('添加成功')
		}
	})
})
// 提交已看评论信息
// router.post('/lookcomment',function(req,res){
// 	// console.log(req.body.com)
// 	connection.query('INSERT INTO `douban`.`comment` (`text`) VALUES (?)',[req.body.com],function(err,rows,f){
// 		if (err) {
// 			console.log(err)
// 		} else {
// 			res.send('添加成功')
// 		}
// 	})
// })

	

module.exports = router;
