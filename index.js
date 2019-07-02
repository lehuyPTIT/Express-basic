var express=require('express');
var app = express();
var port=3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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
	res.render('users/index',{users:matchedYsers,value:q});
});

app.get('/users/create',function(req,res){
	res.render('users/create');
})

app.post('/users/create',function(req,res){
	users.push(req.body);
	res.redirect('/users');
})

app.listen(port,function(){
	console.log(' Day la server cus tao '+ port);
})