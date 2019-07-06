var db=require('../db');

module.exports.index= function(req,res){


	var sessionId=req.signedCookies.sessionId;

	var cart=db.get('sessions')
	.find({id: sessionId})
	.get('cart').value();



	let num=0;
	for(var key in cart){
		num+=cart[key];
	};

	var pag=parseInt(req.query.page) || 1;
	var perPage=8;
	var start=(pag-1)*perPage;
	var end=pag*perPage;

	res.render('products/index',{
		products: db.get('products').value().slice(start,end),
		countOfCart: num
	});

}
