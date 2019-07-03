require('dotenv').config();

var db=require('../db');

module.exports.login=function(req,res){
	res.render('auth/login');
}

module.exports.postLogin=function(req,res){
	var email=req.body.email;
	var password=req.body.password;
	var errors=[];
	var user = db.get('users').find({email: email}).value();
	if(!user){
		errors.push(" Email doesn't exist.");

		res.render('auth/login',{errors:errors});
		return;
	}
	if(user.password!==password){
		errors.push(" Email doesn't exist.");

		res.render('auth/login',{errors:errors});
		return;
	}

	res.cookie('idUser',user.id,{signed: true});

	res.redirect('/users');




}