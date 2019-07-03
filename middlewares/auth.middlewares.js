var db=require('../db');


module.exports.checkLogin=function(req,res,next){

	var cookie=req.cookies.idUser;
	var user=db.get('users').find({id:cookie}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}
	next();
}