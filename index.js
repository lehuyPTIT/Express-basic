var express=require('express');
var app = express();
var port=3000;

var express = require('express')
var cookieParser = require('cookie-parser')



var usersRoutes=require('./routes/user.route');
var authRoutes=require('./routes/auth.route');
var productsRoutes=require('./routes/product.route');
var middleware=require('./middlewares/auth.middlewares');

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',function(request,response){``
	response.render('index');
});

app.use('/users',middleware.checkLogin, usersRoutes);
app.use('/auth',authRoutes);
app.use('/product',productsRoutes);
app.listen(port,function(){
	console.log(' Day la server cus tao '+ port);
})