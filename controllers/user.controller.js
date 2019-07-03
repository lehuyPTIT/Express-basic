
var shortid=require('shortid');
var db=require('../db');

module.exports.index = function(req,res){
	res.render('users/index',{users:db.get('users').value()});
}

module.exports.create=function(req,res){
	res.render('users/create');
}

module.exports.search=function(req,res){
	var q=req.query.q;

	var matchedYsers=db.get('users').value().filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !=-1;
	})
	res.render('users/index',{users:matchedYsers,value:q});
}

module.exports.viewUser=function(req,res){
	var id=req.params.id;
	var user=db.get('users').find({id:id}).value();
	res.render('users/view',{user:user});
}

module.exports.postCreate=function(req,res){
	req.body.id=shortid.generate();
	var error=[];
	var value=req.body;

	if(!req.body.name){
		error.push("Name is not riquire")
	}
	if(!req.body.phone){
		error.push("Phone is not riquire")
	} 
	if(error.length){
		res.render('users/create',{
			errors:error,
			value:value
		})
		return;
	}
	db.get('users').push(req.body).write();
	res.redirect('/users');
}