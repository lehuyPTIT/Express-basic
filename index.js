var express=require('express');
var app = express();
var port=3000;

app.set('view engine', 'pug');
app.set('views', './views');

var  users = [
			{ id:0,name:'huy'},
			{ id:1,name:'dung'}
		];
app.get('/',function(request,response){``
	response.render('index',{
		name: 'huy',
		age : 19
	});
});
app.get('/users',function(req,res){
	res.render('users/index',{users:users});
});

app.get('/users/search',function(req,res){
	var q=req.query.q;

	var matchedYsers=users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !=-1;
	})
	res.render('users/index',{users:matchedYsers});
	var searchBtn=document.getElementsByTagName("input");
	searchBtn.value=q;

});

app.listen(port,function(){
	console.log(' Day la server cus tao '+ port);
})