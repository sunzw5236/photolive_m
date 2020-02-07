var pool = require('./database');
var sql = require('./sql');
var app = require("./https")

var qs = require('querystring');




app.post('/api/getAll', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection
		let sql = ''
		if (req.body.type == 1) {
			sql = 'SELECT * FROM photo_1'
		} else if (req.body.type == 2) {
			sql = 'SELECT * FROM photo_2'
		} else if (req.body.type == 3) {
			sql = 'SELECT * FROM photo_3'
		} else if (req.body.type == 4) {
			sql = 'SELECT * FROM photo_4'
		} else if (req.body.type == 5) {
			sql = 'SELECT * FROM photo_5'
		} else if (req.body.type == 6) {
			sql = 'SELECT * FROM photo_6'
		} else if (req.body.type == 7) {
			sql = 'SELECT * FROM photo_7'
		} else if (req.body.type == 8) {
			sql = 'SELECT * FROM photo_8'
		} else if (req.body.type == 9) {
			sql = 'SELECT * FROM photo_9'
		} else if (req.body.type == 10) {
			sql = 'SELECT * FROM photo_10'
		} else if (req.body.type == 11) {
			sql = 'SELECT * FROM photo_11'
		} else if (req.body.type == 0) {
			sql = 'SELECT * FROM photo_test'
		}

		connection.query(sql, function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 1,
				msg: results,
				affectedRows: 0
			})
		});
	});
});



// 获取评论列表接口
app.post('/api/getcomment', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection
		let sql = ''
			sql = 'SELECT * FROM photo_comment'
		connection.query(sql, function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 1,
				msg: results,
				affectedRows: 0
			})
		});
	});
});



app.post('/api/sendcomment', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection
		let sql = ''
			sql = 'INSERT INTO photo_comment SET  ?'

			connection.query(sql, {
				name: req.body.name,
				time: req.body.time,
				text: req.body.text,
				stars: req.body.stars,
			}, function(error, results, fields) {
				// When done with the connection, release it.
				connection.release();
				// Handle error after the release.
				if (error) throw error;
				// Don't use the connection here, it has been returned to the pool.
				res.json({
					err_code: 0,
					msg: results,
					affectedRows: 0
				})
			});
	});
});



app.post('/api/getAllbylike', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection
		let sql = ''
			sql = 'SELECT * FROM photo_3 order by likes desc'
		connection.query(sql, function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 1,
				msg: results,
				affectedRows: 0
			})
		});
	});
});

app.post('/api/adddata', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection

		let sql = ''
		if (req.body.type == 1) {
			sql = 'INSERT INTO photo_1 SET  ?'
		} else if (req.body.type == 2) {
			sql = 'INSERT INTO photo_2 SET  ?'
		} else if (req.body.type == 3) {
			sql = 'INSERT INTO photo_3 SET  ?'
		} else if (req.body.type == 4) {
			sql = 'INSERT INTO photo_4 SET  ?'
		} else if (req.body.type == 5) {
			sql = 'INSERT INTO photo_5 SET  ?'
		} else if (req.body.type == 6) {
			sql = 'INSERT INTO photo_6 SET  ?'
		} else if (req.body.type == 7) {
			sql = 'INSERT INTO photo_7 SET  ?'
		} else if (req.body.type == 8) {
			sql = 'INSERT INTO photo_8 SET  ?'
		} else if (req.body.type == 9) {
			sql = 'INSERT INTO photo_9 SET  ?'
		} else if (req.body.type == 10) {
			sql = 'INSERT INTO photo_10 SET  ?'
		} else if (req.body.type == 11) {
			sql = 'INSERT INTO photo_11 SET  ?'
		} else if (req.body.type == 0) {
			sql = 'INSERT INTO photo_test SET  ?'
		}

		connection.query(sql, {
			url: req.body.url,
			txt: req.body.txt,
			datetime: req.body.datetime,
			likes: 0,
		}, function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 0,
				msg: results,
				affectedRows: 0
			})
		});
	});
});



app.post('/login', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!



		// Use the connection
		connection.query({
			sql: 'select * from photo_txt where txt = ? and url = ?',
			values: [req.body.username, req.body.password],
		}, function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			try {
				res.json({
					code: 0,
					msg: 'success',
					affectedRows: 0
				})
			} catch (error) {
				res.json({
					code: -1,
					msg: 'error',
					affectedRows: 0
				});
			}
		});
	});
});

app.post('/api/del', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!

		let sql = ''
		if (req.body.type == 1) {
			sql = "DELETE FROM photo_1 WHERE id="
		} else if (req.body.type == 2) {
			sql = "DELETE FROM photo_2 WHERE id="
		} else if (req.body.type == 3) {
			sql = "DELETE FROM photo_3 WHERE id="
		} else if (req.body.type == 4) {
			sql = "DELETE FROM photo_4 WHERE id="
		} else if (req.body.type == 5) {
			sql = "DELETE FROM photo_5 WHERE id="
		} else if (req.body.type == 6) {
			sql = "DELETE FROM photo_6 WHERE id="
		} else if (req.body.type == 7) {
			sql = "DELETE FROM photo_7 WHERE id="
		} else if (req.body.type == 8) {
			sql = "DELETE FROM photo_8 WHERE id="
		} else if (req.body.type == 9) {
			sql = "DELETE FROM photo_9 WHERE id="
		} else if (req.body.type == 10) {
			sql = "DELETE FROM photo_10 WHERE id="
		} else if (req.body.type == 11) {
			sql = "DELETE FROM photo_11 WHERE id="
		} else if (req.body.type == 0) {
			sql = "DELETE FROM photo_test WHERE id="
		}


		// Use the connection
		connection.query(sql + req.body.id + "", function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 0,
				msg: results,
				affectedRows: 0
			})
		});
	});
});


app.post('/api/edit', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection
		let sql = ''
		if (req.body.type == 1) {
			sql = "SELECT * FROM photo_1 WHERE id="
		} else if (req.body.type == 2) {
			sql = "SELECT * FROM photo_2 WHERE id="
		} else if (req.body.type == 3) {
			sql = "SELECT * FROM photo_3 WHERE id="
		} else if (req.body.type == 4) {
			sql = "SELECT * FROM photo_4 WHERE id="
		} else if (req.body.type == 5) {
			sql = "SELECT * FROM photo_5 WHERE id="
		} else if (req.body.type == 6) {
			sql = "SELECT * FROM photo_6 WHERE id="
		} else if (req.body.type == 7) {
			sql = "SELECT * FROM photo_7 WHERE id="
		} else if (req.body.type == 8) {
			sql = "SELECT * FROM photo_8 WHERE id="
		} else if (req.body.type == 9) {
			sql = "SELECT * FROM photo_9 WHERE id="
		} else if (req.body.type == 10) {
			sql = "SELECT * FROM photo_10 WHERE id="
		} else if (req.body.type == 11) {
			sql = "SELECT * FROM photo_11 WHERE id="
		} else if (req.body.type == 0) {
			sql = "SELECT * FROM photo_test WHERE id="
		}

		connection.query(sql + req.body.id + "", function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 0,
				msg: results,
				affectedRows: 0
			})
		});
	});
});





app.post('/api/updateEdit', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!

		let sql = ''
		if (req.body.type == 1) {
			sql = "update photo_1 set likes=(likes+1) where id="
		} else if (req.body.type == 2) {
			sql = "update photo_2 set likes=(likes+1) where id="
		} else if (req.body.type == 3) {
			sql = "update photo_3 set likes=(likes+1) where id="
		} else if (req.body.type == 4) {
			sql = "update photo_4 set likes=(likes+1) where id="
		} else if (req.body.type == 5) {
			sql = "update photo_5 set likes=(likes+1) where id="
		} else if (req.body.type == 6) {
			sql = "update photo_6 set likes=(likes+1) where id="
		} else if (req.body.type == 7) {
			sql = "update photo_7 set likes=(likes+1) where id="
		} else if (req.body.type == 8) {
			sql = "update photo_8 set likes=(likes+1) where id="
		} else if (req.body.type == 9) {
			sql = "update photo_9 set likes=(likes+1) where id="
		} else if (req.body.type == 10) {
			sql = "update photo_10 set likes=(likes+1) where id="
		} else if (req.body.type == 11) {
			sql = "update photo_11 set likes=(likes+1) where id="
		} else if (req.body.type == 0) {
			sql = "update photo_test set ? where id=" + req.body.id
		}
		// Use the connection
		connection.query(sql, {
			url: req.body.url,
			txt: req.body.txt,
			datetime: req.body.datetime,
			likes: req.body.likes,
		}, function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 0,
				msg: results,
				affectedRows: 0
			})
		});
	});
});

app.post('/api/addlike', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!

		let sql = ''
		if (req.body.type == 1) {
			sql = "update photo_1 set likes=(likes+1) where id="
		} else if (req.body.type == 2) {
			sql = "update photo_2 set likes=(likes+1) where id="
		} else if (req.body.type == 3) {
			sql = "update photo_3 set likes=(likes+1) where id="
		} else if (req.body.type == 4) {
			sql = "update photo_4 set likes=(likes+1) where id="
		} else if (req.body.type == 5) {
			sql = "update photo_5 set likes=(likes+1) where id="
		} else if (req.body.type == 6) {
			sql = "update photo_6 set likes=(likes+1) where id="
		} else if (req.body.type == 7) {
			sql = "update photo_7 set likes=(likes+1) where id="
		} else if (req.body.type == 8) {
			sql = "update photo_8 set likes=(likes+1) where id="
		} else if (req.body.type == 9) {
			sql = "update photo_9 set likes=(likes+1) where id="
		} else if (req.body.type == 10) {
			sql = "update photo_10 set likes=(likes+1) where id="
		} else if (req.body.type == 11) {
			sql = "update photo_11 set likes=(likes+1) where id="
		} else if (req.body.type == 0) {
			sql = "update photo_test set likes=(likes+1) where id="
		}

		// Use the connection
		connection.query(sql + req.body.id + "", function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 0,
				msg: results,
				affectedRows: 0
			})
		});
	});
});

app.get('/api/addusernum', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection
		connection.query("update viewnum set onlinenum=(onlinenum+1)", function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 0,
				msg: results,
				affectedRows: 0
			})
		});
	});
});
app.get('/api/getusernum', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!
		// Use the connection
		connection.query("SELECT * FROM viewnum", function(error, results, fields) {
			// When done with the connection, release it.
			connection.release();
			// Handle error after the release.
			if (error) throw error;
			// Don't use the connection here, it has been returned to the pool.
			res.json({
				err_code: 0,
				msg: results,
				affectedRows: 0
			})
		});
	});
});




















// 调用相关模块
var AipFaceClient = require("baidu-aip-sdk").face;
var fs = require('fs');
var path = require('path');

// 设置APPID/AK/SK
var APP_ID = "17754117";
var API_KEY = "CppSRV6Nz6DkoTj065APz4yz";
var SECRET_KEY = "gjW81ZPzk89z5rWaVVkXDjOmFqfcY4od";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);


//存储文件部分
var multer  = require('multer');
var createFolder = function(folder){
	try{
		fs.accessSync(folder);
	}catch(e){
		fs.mkdirSync(folder);
	}
};

//存储本地文件
var uploadFolder = './upload/';
createFolder(uploadFolder);
// var upload = multer({ dest: 'uploads/' })
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	cb(null, uploadFolder)
	},
	filename: function (req, file, cb) {
		//+ '-' + Date.now()
	cb(null, file.originalname)
	}
});
var upload = multer({ storage: storage });

function addUser(req,res){
// 读二进制数据
var bitmap = fs.readFileSync('./upload/'+req.file.originalname);
// 将二进制数据转换为base64编码的字符串
// var image = new Buffer.from(bitmap).toString('base64');
var image = 'http://yun.neweasco.com:88/photolive_Data1.0/mymg1/mymg1/upload/'+req.file.originalname;
// 图片类型 BASE64/URL/FACE_TOKEN
var imageType = "URL";//BASE64
// 用户组id（由数字、字母、下划线组成），长度限制128B
var groupId = "test_demo";
// 用户id（由数字、字母、下划线组成），长度限制128B
var userId = "yhw";
// 如果有可选参数
var options = {};
// options["user_info"] = "user's info";
// options["quality_control"] = "NORMAL";
// options["liveness_control"] = "LOW";




// 带参数调用人脸注册接口
client.addUser(image, imageType, groupId, userId, options).then(function(result) {
	console.log(JSON.stringify(result));
	//如果上传图片成功我就入库
	if(result.error_code==0){
		pool.getConnection(function(err, connection) {
			if (err) throw err; // not connected!
			// Use the connection
			let sql = 'INSERT INTO photo_map SET ?'
			connection.query(sql, {
				url: image,
				userid: userId,
				groupid:groupId,
				imgname: req.file.originalname,
				face_token: result.result.face_token,
			}, function(error, results, fields) {
				// When done with the connection, release it.
				connection.release();
				console.log("插入一条数据了！")
				// Handle error after the release.
				// if (error) throw error;
				// Don't use the connection here, it has been returned to the pool.
				// res.json({
				// 	err_code: 0,
				// 	msg: results,
				// 	affectedRows: 0
				// })
				res.send({
					err_code: 0,
					msg: "插入一条数据了！",
					affectedRows: 0
				})


			});
		});

	
	}else{
		res.send({
			err_code: 0,
			msg: "上传图片未检测到人脸或者格式不对",
			affectedRows: 0
		})

	}

}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});
}

//上传接口
app.post('/upload', upload.single('pics'), function (req, res, next) {
	// req.file is the `avatar` file
	addUser(req,res)
	// req.body will hold the text fields, if there were any

  });



  
















  	//存储本地文件
	var uploadFolder_2 = './searchImg/';
	createFolder(uploadFolder_2);
	// var upload = multer({ dest: 'uploads/' })
	var storage_2 = multer.diskStorage({
	  destination: function (req, file, cb) {
		cb(null, uploadFolder_2)
	  },
	  filename: function (req, file, cb) {
		  //+ '-' + Date.now()
		cb(null, file.originalname)
	  }
	});
	var upload_2 = multer({ storage: storage_2 });




  function searchUser(req,res){
	// 读二进制数据
	var bitmap = fs.readFileSync('./searchImg/'+req.file.originalname);
	// 将二进制数据转换为base64编码的字符串
	var image = new Buffer.from(bitmap).toString('base64');
	// 图片类型 BASE64/URL/FACE_TOKEN
	var imageType = "BASE64";
	// 从指定的group中进行查找 用逗号分隔，上限20个
	var groupIdList = "test_demo";
	// 如果有可选参数
	var options = {};
	// options["quality_control"] = "NORMAL";
	// options["liveness_control"] = "LOW";
	// options["user_id"] = "233451";
	// options["max_user_num"] = "3";
	// 带参数调用人脸检测
	client.search(image, imageType, groupIdList, options).then(function(result) {
		// console.log(JSON.stringify(result));
		console.log(result.result.user_list[0].user_id);
		pool.getConnection(function(err, connection) {
			if (err) throw err; // not connected!
			// Use the connection
			connection.query({
				sql: 'select * from photo_map where groupid = ? and userid = ?',
				values: [result.result.user_list[0].group_id, result.result.user_list[0].user_id],
			}, function(error, results, fields) {
				// When done with the connection, release it.
				connection.release();
				// Handle error after the release.
				try {
					res.json({
						code: 0,
						msg: results,
						affectedRows: 0
					})
				} catch (error) {
					res.json({
						code: -1,
						msg: results,
						affectedRows: 0
					});
				}
			});
		});
		// res.send({
		// 	err_code: 0,
		// 	msg: result,
		// 	affectedRows: 0
		// })
	}).catch(function(err) {
		// 如果发生网络错误
		console.log(err);
	});

  }
 

//搜索接口
app.post('/search', upload_2.single('pics'), function (req, res, next) {
	// req.file is the `avatar` file
	searchUser(req,res);


	
	// req.body will hold the text fields, if there were any
  });