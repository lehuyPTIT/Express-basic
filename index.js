var express=require('express');
var app = express();
var port=3000;

var db=require('./db');
var usersRoutes=require('./routes/user.route');

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

app.use('/users',usersRoutes);

app.listen(port,function(){
	console.log(' Day la server cus tao '+ port);
})