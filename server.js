var express=require('express');

var fs = require('fs');

var app = express();

var multer = require('multer');

app.use(express.static("./public"));

var upload =multer({dest:'uploads/'});

app.post("/*",upload.single('file'),(req,res)=>{
	fs.unlink(req.file.path,(err)=>{
		if(err){
			console.log(err);
		}else{
			console.log("deleted "+req.file.path);
		}
	});
	res.end(JSON.stringify("size: "+req.file.size));
});


app.listen(process.env.PORT||8888, function () {
	
});