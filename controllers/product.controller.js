var db=require('../db');

module.exports.index= function(req,res){
	var pag=parseInt(req.query.page) || 1;
	var perPage=9;
	var start=(pag-1)*perPage;
	var end=pag*perPage;
	res.render('products/index',{
		products: db.get('products').value().slice(start,end)
	})

}
