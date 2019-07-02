var express=require('express');
var app = express();
var port=3000;

var low = require('lowdb') 
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')

var db = low(adapter);

db.defaults({users: [] })
  .write();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',function(request,response){``
	response.render('index',{
		name: 'huy',
		age : 19
	});
});
app.get('/users',function(req,res){
	res.render('users/index',{users:db.get('users').value()});
});

app.get('/users/search',function(req,res){
	var q=req.query.q;

	var matchedYsers=db.get('users').value().filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !=-1;
	})
	res.render('users/index',{users:matchedYsers,value:q});
});

app.get('/users/create',function(req,res){
	res.render('users/create');
})

app.post('/users/create',function(req,res){
	db.get('users').push(req.body).write();
	res.redirect('/users');
})

app.listen(port,function(){
	console.log(' Day la server cus tao '+ port);
})